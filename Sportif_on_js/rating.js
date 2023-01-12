function rating() {
        let rating = document.querySelector('.rating')
        rating.addEventListener('click', function (e) {
            if (!e.target.closest('input')) {return;}
            e.path[2].querySelector('.ratingActive').style.width = e.target.value * 20 + '%';
        })
}

function slider(){
    let slider = document.querySelector('.slider')
    slider.addEventListener('click', function (e) {
        if (!e.target.closest('.sliderItem')) {return;}
        document.querySelector('.mainPhotoPr img').outerHTML = e.target.outerHTML
        slider.querySelector('.active-border').classList.remove('active-border')
        e.target.parentElement.classList.add('active-border')
    })
}
// slider()

function backToProducts(){
    let btnProductCategory = document.querySelector('.productCategoryBtn')
    btnProductCategory.addEventListener('click', function (e) {
        if (!e.target.closest('.productCategoryBtn')) {return;}
        addAnchor()
        searchPage(linksToProducts, true)
    })
}

window.addEventListener('scroll', scrollTop_)

function scrollTop_(){
    let scroll = document.querySelector('.top')
    scroll.addEventListener('click', function (e) {
        window.scrollTo({
            top,
            behavior: 'smooth'
        })
    })
    if (window.scrollY > window.innerHeight){
        scroll.classList.add('btnUpperOpen')
    }else {
        scroll.classList.remove('btnUpperOpen')
    }
}


// burger menu logic
let opened = false
let ulHide = undefined
let menuTarget = undefined
let burgerMenu = document.querySelector('.li-menu')
let header = document.querySelector('.header')

burgerMenu.addEventListener('click', function (e) {
    if (!opened){
        document.querySelectorAll('.header li').forEach(function (el) {
            el.style.display = 'block'
        })
        ulHide = this.parentElement
        menuTarget = e.target.style.position
        header.style.display = 'block'
        this.parentElement.style.height = window.innerHeight + 'px'
        this.parentElement.style.gap = '20px'
        e.target.style.position = 'absolute'
        e.target.style.right = '70px'
        e.target.style.top = '10px'
        opened = true
    }else{
        document.querySelectorAll('.header li').forEach(function (el) {
            el.style.display = 'none'
        })
        this.parentElement.style.height = 'auto'
        header.style.display = 'flex'
        e.target.style.position = 'auto'
        opened = false
    }
})
// close when clicked on link
linksToProducts.forEach(e => {
    // if (ulHide){}
    e.addEventListener('click', function() {
        ulHide.style.height = '0'
        opened = false
        document.querySelectorAll('.header li').forEach(function (el) {
            el.style.display = 'none'

        })
    })
})
//end burger logic