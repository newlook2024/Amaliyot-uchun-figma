var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    // autoplay: true,
    speed: 1000,
});

let plus = document.querySelectorAll('.plus1')
let minus = document.querySelectorAll('.minus1')
let count = document.querySelectorAll('.deleteCards__card__count')

let totalP = document.querySelectorAll('#total_price')
let totalPrice = document.querySelector('#total-price')
let cardP = document.querySelectorAll('#deleteCards__card__price')

plus.forEach((item, index) => {
    item.addEventListener('click', () => {
        count[index].textContent = count[index].textContent * 1 + 1
        totalP[index].textContent = totalP[index].textContent * 1 + cardP[index].textContent * 1 + '.00'
        totalPrice.textContent = totalPrice.textContent * 1 + cardP[index].textContent * 1 + '.00'
    })
})

minus.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (count[index].textContent > 1) {
            count[index].textContent = count[index].textContent * 1 - 1
            totalP[index].textContent = totalP[index].textContent * 1 - cardP[index].textContent * 1 + '.00'
            totalPrice.textContent = totalPrice.textContent * 1 - cardP[index].textContent * 1 + '.00'
        }
    })
})

let Card = document.querySelectorAll('.deleteCards__card')
let deleteBtn = document.querySelectorAll('.deleteCards__card__delete__btn')
let cardBox = document.querySelector('.deleteCards__card__box')

deleteBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        Card[index].remove()
        totalPrice.textContent = totalPrice.textContent*1 - totalP[index].textContent*1
    })
})








