let link =  document.querySelector('.link-to-shorts')
let mainWrap = document.querySelector('.main-wrapper')
let sizeContent = undefined
let colorsContent = undefined
let limitPtPerPage = 4
let pagination = undefined
let totalPages = undefined
let currentPage = 1
let anchor = undefined
let searchInput = undefined
let productsTotal = undefined
let cart_ = document.querySelector('.cart-wrap')
let linksToProducts = undefined
//

function addAnchor() {
    linksToProducts = document.querySelectorAll('[data-product-class]')
    linksToProducts.forEach(e => e.addEventListener('click', function (e) {
            anchor = e.target.dataset.productClass
    })
    )
}


function searchPage(linksToProducts, refresh=false) {
        linksToProducts.forEach(e => e.addEventListener('click', showProducts))
    if (refresh){
        mainWrap.innerHTML = search_body
        //

        //
        showProducts()
    }
}

// adding products on search_page(Page of product category)
// better don't look here :D
function implementProduct(limit=1, page=0,
                          clearField=false, filter=false,
                          filterName=undefined, takenData=undefined){
    let productBox = document.querySelector('.product-place')
    let endProductOfPage = page * limit + limit
    if (clearField){
        document.querySelectorAll('.product-box').forEach(e => e.remove())
    }

    for (let i = page * limit; i < endProductOfPage; i++) {
        if (!products[anchor][i]){break}
        // filter by name product(and transaction to lowerCase)
        // debugger

        if (filterName === 'name' && filter && !products[anchor][i][filterName].toLowerCase().includes(takenData.toLowerCase())){
            continue
            // return
        // filter by another parameters
        }else if (filterName !== 'name' && filter && !products[anchor][i][filterName].includes(takenData)){
            continue
        }
        let doc_to_upload = `<div class="product-box">
        <div class="card-sec2 text-align">
           <img src="${products[anchor][i].img[0]}" alt="shorts1">
           <h1>${products[anchor][i].name}</h1>
           <div class="star">${'&#11088;'.repeat(products[anchor][i].rating)}</div>
           <div class="card-price">As low as <b>$${products[anchor][i].price}</b></div>
<!--          AVAILABLE COLORS OF PRODUCT -->
            <div class="size-pr-box flex">
              ${products[anchor][i].colors2.map(e => {
            return `<img src="${e}">`
        }).join('')}
            </div>
           <div class="btn-add-cart" data-model-name="${products[anchor][i].name}">ADD TO CART</div>
         </div>
      </div>`
        productBox.insertAdjacentHTML('afterbegin', doc_to_upload)
    }
    //
    //
    // IMPLEMENT EVENT ACTION MOVE TO SINGLE PRODUCT
    document.querySelectorAll('.product-box img').forEach(e => {
        e.addEventListener('click', function(e) {
            let productName = e.target.parentElement.querySelector('h1').textContent
            let currentProduct = products[anchor].find(e => e.name === productName)

            mainWrap.innerHTML = productBody

            //     PLACES TO PAST DATA FROM  currentProduct
            let productCategoryBtn = document.querySelector('.productCategoryBtn')
            productCategoryBtn.classList.add(`link-to-${anchor}`)
            productCategoryBtn.dataset.productClass = anchor
            productCategoryBtn.innerHTML = anchor.toString().toUpperCase()
            // change description text
            document.querySelector('.additional-text-detail').textContent = currentProduct.product_description
            // change product name
            document.querySelector('.productName').innerHTML = productName
            // change rating
            document.querySelector('.ratingActive').style.width = parseInt(currentProduct.rating) * 20 + '%'
            // adding dataset to button ADD TO CART
            document.querySelector('.btn-detail').dataset.modelName = productName
            // changing product name
            document.querySelector('.title-detail').innerHTML = productName
            // changing product price
            document.querySelector('.card-price h1').innerHTML = `$${currentProduct.price}`
            // changing available colors
            document.querySelector('#colors').innerHTML = currentProduct.colors_data.map(e => {return `<span class="size-box color-pr-detail ${e}" data-color="${e}"></span>`}).join('')
            // changing available sizes and filter unavailable
            document.querySelector('#sizes').innerHTML = currentProduct.size.map(size => {
                if (currentProduct.unable_size && currentProduct.unable_size.includes(size)) {return `<span class="size-box size-pr-detail size-boxBlocked">${size}</span>`}
                console.log(currentProduct.unable_size, 11)
                return `<span class="size-box size-pr-detail">${size}</span>`
            }).join('')
            // adding main photo
            document.querySelector('.mainPhotoWrrap').innerHTML = `<img src="${currentProduct.img[0]}" alt="test">`
            // adding photos to slider
            document.querySelector('.slider').innerHTML = currentProduct.img.map((photo, index) => {
                if (!index){return `<div class="sliderItem active-border"><img src="${photo}" alt="test"></div>`}
                return `<div class="sliderItem"><img src="${photo}" alt="test"></div>`
            }).join('')
            addEventToAddCart('.btn-detail')
            rating()
            slider()
            backToProducts()

        })
    })
}

// logic for pagination
function createPagination(){
    let paginationElements = pagination.querySelectorAll('.pagination')
    // remove old pagination
    if (paginationElements) {
        pagination.querySelectorAll('.pagination').forEach(e => e.remove())
    }

    if (totalPages < 4) {
        for (let i = 0; i < totalPages; i++) {
            pagination.insertAdjacentHTML('beforeend', `<a href=""><div class="pagination">${i+1}</div></a>`)
        }
    }else if(totalPages === 1){

    }else if (totalPages === currentPage){
        pagination.insertAdjacentHTML('beforeend', `<a href=""><div class="pagination">1</div></a>`)
        pagination.insertAdjacentHTML('beforeend', `<a href=""><div class="pagination">${currentPage - 1}</div></a>`)
        pagination.insertAdjacentHTML('beforeend', `<a href=""><div class="pagination active-page">${currentPage}</div></a>`)

    }
    else{
        if(currentPage !== 1) {
            pagination.insertAdjacentHTML('beforeend', `<a href=""><div class="pagination">1</div></a>`)
        }
        if (currentPage-1 > 1) {
            pagination.insertAdjacentHTML('beforeend', `<a href=""><div class="pagination">${currentPage - 1}</div></a>`)
        }
        pagination.insertAdjacentHTML('beforeend', `<a href=""><div class="pagination active-page">${currentPage}</div></a>`)
        pagination.insertAdjacentHTML('beforeend', `<a href=""><div class="pagination">${currentPage+1}</div></a>`)
        pagination.insertAdjacentHTML('beforeend', `<a href=""><div class="pagination">></div></a>`)
    }
}

// implements sizes on search_page(page of product category)
function implementSizes(){
    productsSizes[anchor].forEach(el => {
        sizeContent.insertAdjacentHTML('beforeend', `<span class="size-box">${el}</span>`)
    })
}


function showProducts(){
    // load new body
        mainWrap.innerHTML = search_body
        document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="src/style/search_page.css">')
        // my variables selectors for later using
        sizeContent = document.querySelector('#size-box')
        colorsContent = document.querySelector('#colors-box')
        pagination = document.querySelector('.box-pagination')
        productsTotal = products[anchor].length
        totalPages = productsTotal / limitPtPerPage
        searchInput = document.querySelector('.search input')

        // implements sizes and products, create pagination
        implementSizes()
        implementProduct(limitPtPerPage, 0)
        createPagination()
        addEventToAddCart('.btn-add-cart')
        //
        let nav = document.querySelector('.nav')

        // animate menu-sizes and menu-colors opened when clicking on arrow
        nav.addEventListener('click', animMenu)
        //

        // find by name
        findProductsByName(searchInput)

        // adding content by page
        addPagination(pagination)

        // event handling clicks on sizes
        // filter by sizes
        sizeContent.addEventListener('click', function (e) {
            if (!e.target.closest('.size-box')) {
                return
            }
            implementProduct(limitPtPerPage + 100, 0, true, true, 'size', e.target.innerText)
            pagination.querySelectorAll('.pagination').forEach(e => e.remove())
        })

        colorsContent.addEventListener('click', function (e) {
            if (!e.target.dataset.color) {
                return
            }
            // debugger
            // Filter by colors
            implementProduct(limitPtPerPage + 100, 0, true, true, 'colors_data', e.target.dataset.color)
            pagination.querySelectorAll('.pagination').forEach(e => e.remove())
        })
}

function findProductsByName(selector){
    selector.addEventListener('input', function (e) {
        implementProduct(1000, 0, true, true, 'name', e.target.value.toLowerCase())
    })
    selector.addEventListener('focusout', function (e) {
        if (e.target.value === '') {
            implementProduct(limitPtPerPage, 0, true)
        }
    })
}

function addPagination(selector){
    selector.addEventListener('click', e => {
        e.preventDefault()
        if (e.target.innerText === '>') {
            currentPage = currentPage + 1
        } else {
            currentPage = parseInt(e.target.innerText)
        }
        createPagination()
        implementProduct(limitPtPerPage, currentPage - 1, true)
        addEventToAddCart('.btn-add-cart')
    })
}

function animMenu(e) {
            if (!e.target.classList.contains('arrowOpenDetail')){return;}
            let animation = e.target.parentElement.nextElementSibling
            if (animation.classList.contains('hide-content')) {
                if (!animation.classList.contains('opened')) {
                    animation.animate([
                        {opacity: 0, transform: 'scale(0.1)'},
                        {opacity: 1, transform: 'scale(1)'},
                    ], {duration: 1000})
                    animation.classList.add('opened')
                } else {
                    animation.animate([
                        {opacity: 1, scale: '1 1'},
                        {opacity: 0, scale: '1 0'}
                    ], {duration: 1000})
                    setTimeout(function () {
                        animation.classList.remove('opened')
                    }, 800)
                }
            }
        }

let searchInputGlobal = document.querySelector('#search-inp')
searchInputGlobal.addEventListener('click', function (e){
})

addAnchor()
searchPage(linksToProducts)
