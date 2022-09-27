
const clickRegister = document.querySelector('.js__register')
const clickLogin = document.querySelector('.js__login')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js_close-btn')
const modalCloseOverlay = document.querySelector('.js-overlay')
const modalRegister = document.querySelector('.js-auth-form-register')
const modalLogin = document.querySelector('.js-auth-form-login')

function showRegister(){
    modal.classList.add('open')
    modalRegister.classList.add('open__auth-form')
}

// function showLogin(){
//     modal.classList.add('open')
//     modalLogin.classList.add('open__auth-form')
// }

function hideRegister(){
    modal.classList.remove('open')
}


clickRegister.addEventListener('click',showRegister)
// clickLogin.addEventListener('click',showLogin)
modalClose.addEventListener('click',hideRegister)
modalCloseOverlay.addEventListener('click',hideRegister)