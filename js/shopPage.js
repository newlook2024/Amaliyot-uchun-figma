var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    // autoplay: true,
    speed: 1000,
});

let flowerPNG = document.querySelectorAll('#flower')
let mainFlower = document.querySelector('#flower1')

flowerPNG.forEach((item, index) => {
    item.addEventListener('click', () => {
        flowerPNG.forEach((item1) => {
            item1.classList.remove('act__png')
        })
        flowerPNG[index].classList.add('act__png')
        mainFlower.src = flowerPNG[index].src
    })
})

let minus = document.querySelector(".minus")
let countNum = document.querySelector(".counter__count")
let plus = document.querySelector(".plus")

plus.addEventListener('click', () => {
    if (countNum.textContent * 1 < 100) {
        countNum.textContent = countNum.textContent * 1 + 1
    }else{
        countNum.textContent = 100
    }
})
minus.addEventListener('click', () => {
    if (countNum.textContent * 1 > 1) {
        countNum.textContent = countNum.textContent * 1 - 1
    } else {
        countNum.textContent = 1
    }
})

let size = document.querySelectorAll('#size')

size.forEach((item, index) => {
    item.addEventListener('click', () => {
        size.forEach((item1) => {
            item1.classList.remove('shop-hero__size_A')
            item1.classList.add('shop-hero__size')
        })
        size[index].classList.add('shop-hero__size_A')
        size[index].classList.remove('shop-hero__size')
    })
})

let infoTabBtn = document.querySelectorAll('#infoTabBtn')

infoTabBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        infoTabBtn.forEach((item1) => {
            item1.classList.remove('active__catigory')
            item1.classList.remove('shop__tab__btn_A')
            item1.classList.add('shop__tab__btn_N')
            item1.classList.add('normal__catigory')
        })
        infoTabBtn[index].classList.add('active__catigory')
        infoTabBtn[index].classList.add('shop__tab__btn_A')
        infoTabBtn[index].classList.remove('shop__tab__btn_N')
        infoTabBtn[index].classList.remove('normal__catigory')
    })
})