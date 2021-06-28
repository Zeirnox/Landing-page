const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const navlink = document.getElementsByClassName('navlink')[0]
const dropDown = document.getElementsByClassName('destinationMenu')[0]
const subMenu = document.getElementsByClassName('subMenu')[0]

toggleBtn.addEventListener('click', () => {
    navlink.classList.toggle('active')
})

dropDown.addEventListener('click', () => {
    subMenu.classList.toggle('active')
})