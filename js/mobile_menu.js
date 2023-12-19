const menuBtn = document.querySelector('.nav__toggler')
const menu = document.querySelector('.nav-mobile')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('nav__toggler--active')
})