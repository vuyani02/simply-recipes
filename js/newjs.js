const getElement = (selector) => {
const element = document.querySelector(selector)

if (element) return element
throw Error(
    `Please double check your class names, there is no ${selector} class`)
}

const links = getElement('.nav-links')
const container = getElement('.container-new')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
links.classList.toggle('show-links') 
container.classList.toggle('increase-h-new') 
})

const date = getElement('#yr')
const currentYear = new Date().getFullYear()
date.textContent = currentYear