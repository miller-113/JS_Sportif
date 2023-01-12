
// функция отвечает за открытие нашей корзины и закрытие при нажатии вне окна
window.addEventListener('click', function (e){
    let hideCart = document.querySelector('.hide-cart')
    if (e.target.closest('.cart-img')){
        if (localStorage.cart && JSON.parse(localStorage.cart).length > 0) {
            fillCart()
            hideCart.style.display = (hideCart.style.display === 'none' || hideCart.style.display === '') ? 'block' : 'none'
        }
        else{
            alert('Cart empty')
        }
        //
        // тут встраиваем переход к чек-листу
    }else if (hideCart.contains(e.target)){
        // pass logic(if click on cart)
        if (!!e.target.closest('div .checkoutAction')){
            hideCart.style.display = 'none'
            mainWrap.innerHTML = cartDetailPage
            let tableData = document.querySelector('.tableBody')
            let result = []
            JSON.parse(localStorage.cart).map(el => {
                // debugger
                let tableRow = `
                <tr>
                  <td><img src="${el.img[0]}" alt=""></td>
                  <td>
                    <div class="cartPrBrand">Sportif</div>
                    <div class="cartPrName">${el.name}</div>
                    <div class="cartPrcolor">${el.colors2.map((e,index) => {`<img src="${e}" alt="">`})}</div>
                    <div class="cartPrcolor">${el.colors.map((e,index) => {return `<b><span data-color="${e}" data-hover-img="${el.colors2[index]}">${e}</span></b>`}).join(', ')}</div>
                    <div class="cartPrSize">${el.size.filter(e => {return `<a href="#">${!el.unable_size.includes(e)}</a>`}).join(', ')}</div>
                    <a href="#" class="cartPrBtnChange">Change</a>
                  </td>
                  <td><div class="cartPrPrice">${el.price}$</div></td>
                  <td><span data-product-name="${el.name}" class="arrowCartQuantity">&#11015;</span><span id="quantity" class="quantityBetweenArrow"> ${el.quantity}</span> <span data-product-name="${el.name}" class="arrowCartQuantity">&#11014;</span></td>
                  <td class="totalPricePrCart">${el.price * el.quantity}$</td>
                </tr>
                `
                result.push(tableRow)
            })
            tableData.innerHTML = [...result].join('');

            //
            //
            //
            // CHANGING QUANTITY PRODUCT IN CHECK OUT
            document.querySelectorAll('.arrowCartQuantity').forEach(e => {
                e.addEventListener('click', function(e){
                    console.log(e.target)
                    console.log(e.target.textContent)
                    // debugger
                    let existProduct = JSON.parse(localStorage.cart).find(el => el.name === e.target.dataset.productName)
                    if (e.target.textContent === '⬇'){
                        if (parseInt(existProduct.quantity) !== 0) {
                            existProduct.quantity = parseInt(existProduct.quantity) - 1
                            localStorage.cart = JSON.stringify(JSON.parse(localStorage.cart).filter(el => el.name !== existProduct.name).concat([existProduct]))
                        }
                    }else {
                        existProduct.quantity = parseInt(existProduct.quantity) + 1
                        localStorage.cart = JSON.stringify(JSON.parse(localStorage.cart).filter(el => el.name !== existProduct.name).concat([existProduct]))
                    }
                    document.querySelector('#quantity').textContent = ` ${existProduct.quantity} `
                    document.querySelector('.totalPricePrCart').textContent = ` ${existProduct.quantity * existProduct.price} `
                })
                fillCart()
            })

            // unusefull event. Adding tabs colors when mouse over on text color
            let helpImg = undefined;
            document.querySelectorAll('[data-hover-img]').forEach(e => {
                e.addEventListener('mouseover', (e) => {
                    let coords = e.target.getBoundingClientRect();
                    helpImg = document.createElement('div');
                    helpImg.style.position = 'absolute';
                    helpImg.style.width = '35px';
                    helpImg.style.borderRadius = '10px';
                    helpImg.style.top = (coords.top - e.target.offsetHeight - 25) + 'px';
                    helpImg.style.left = coords.left + coords.width/2/2 + 'px';
                    helpImg.innerHTML = `<img src="${e.target.dataset.hoverImg}" alt="${e.target.dataset.color}">`;
                    document.body.append(helpImg);
                    console.log(helpImg.offsetWidth);
                })
                e.addEventListener('mouseout', (e) => {
                    if (helpImg){
                        helpImg.remove()
                    }
                })
            })
        }
    }else {
        hideCart.style.display = 'none'
    }
})

// добавление товара в корзину через кнопку на товаре
function addEventToAddCart(selector){

    if (!document.querySelectorAll(selector)){return}
    // debugger
    let existProduct = undefined;
    let productsOnPage = [...document.querySelectorAll(selector)]
    productsOnPage.forEach(e => e.addEventListener('click', function (event){
        // debugger
        let dataModelName = event.target.dataset.modelName
        let productFromBtn = products[anchor].find(elem => elem.name === dataModelName)
        if (localStorage.cart) {
            existProduct = JSON.parse(localStorage.cart).find(e => e.name === productFromBtn.name)
        }

        if (!localStorage.cart) {
            localStorage.cart = JSON.stringify([productFromBtn])
        }else if(existProduct){
            existProduct.quantity = parseInt(existProduct.quantity) + 1
            localStorage.cart = JSON.stringify(JSON.parse(localStorage.cart).filter(el => el.name !== existProduct.name).concat([existProduct]))
        }else{
            localStorage.cart = JSON.stringify(JSON.parse(localStorage.cart).concat([productFromBtn]))
        }
        fillCart()
    }))
}

// добавление товаров в корзину
function fillCart(){
    if (localStorage.cart) {
        let productBox = document.querySelector('.cartProductAppend')

        let productFromSessions = JSON.parse(localStorage.cart).filter(el => !el.quantity < 1)
        let lst = []
        productFromSessions.map(elem => {
            let result = `
        <div style="position: relative">
            <div class="close">X</div>
            <div class="previewCartItem-image"><img src="${elem.img[0]}" alt=""></div>
            <div class="previewCartItem-content">
              <span class="previewBrand">Sportif USA</span>
              <h5>${elem.name}</h5>
              <span class="previewPrice">Amount:${elem.quantity} </span>
              <span class="previewPrice">${elem.price}$</span>
            </div>
        </div>
        `
            lst.push(result)
        })

        productBox.innerHTML = [...lst].join('')
        // remove item(product) from preview cart
        document.querySelectorAll('.close').forEach(e => e.addEventListener('click', function(e){
            let productNameInCart = e.target.parentElement.querySelector('h5').textContent
            localStorage.cart = JSON.stringify(JSON.parse(localStorage.cart).filter(e => e.name !== productNameInCart))
            e.target.parentElement.remove()
            // закрываем корзину если товаров нет
            if (e.path[2].childElementCount === 0) {
                document.querySelector('.hide-cart').style.display = 'none'
            }
        }))
    }
}


function dontImplementYet(){
    // pass
    document.createElement('div')

}