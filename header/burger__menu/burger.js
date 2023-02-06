const burgerMenu = document.querySelector('.burger-menu')
const backdrop = document.querySelector('.backdrop')
const headeNavItem = document.querySelector('.header__navItem')
const headerNav = document.querySelector('.header__nav')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('buger-menu-btn')
    burgerMenu.classList.toggle('burger-switch')
    headerNav.classList.toggle('show__nav')
    backdrop.classList.toggle('show-backdrop')
})
const removeClasses = () => {
    burgerMenu.classList.remove('buger-menu-btn')
    headerNav.classList.remove('show__nav')
    backdrop.classList.remove('show-backdrop')
}

backdrop.addEventListener('click', () => {
    removeClasses()
})

const remove = () => {
    headeNavItem.forEach(el => {
        el.addEventListener('click', () => {
            removeClasses()
        })
    })
}