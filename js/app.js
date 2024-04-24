var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    // autoplay: true,
    speed:1000,
});

let homeShopBtn = document.querySelectorAll('#home-shop__btn')

homeShopBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        homeShopBtn.forEach((item1) => {
            item1.classList.remove('active__catigory')
            item1.classList.add('normal__catigory')
        })
        homeShopBtn[index].classList.remove('normal__catigory')
        homeShopBtn[index].classList.add('active__catigory')
    })
})

let shopTab = document.querySelectorAll('#shop__tap')

shopTab.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        shopTab.forEach((item1)=>{
            item1.classList.remove('shop__tab__btn_A')
            item1.classList.remove('active__catigory')
            item1.classList.add('shop__tab__btn_N')
            item1.classList.add('normal__catigory')
        })
        shopTab[index].classList.remove('shop__tab__btn_N')
        shopTab[index].classList.remove('normal__catigory')
        shopTab[index].classList.add('shop__tab__btn_A')
        shopTab[index].classList.add('active__catigory')
    })
})

let homePageBtns = document.querySelectorAll('#home__page__btns')

homePageBtns.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        homePageBtns.forEach((item1)=>{
            item1.classList.remove('main__btn')
            item1.classList.remove('home-page__btn-A')
            item1.classList.add('home-page__btn')
        })
        homePageBtns[index].classList.add('main__btn')
        homePageBtns[index].classList.add('home-page__btn-A')
        homePageBtns[index].classList.remove('home-page__btn')
    })
})