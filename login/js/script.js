let openLoginRight = document.querySelector('.h1');
let loginWrapper = document.querySelector(".login-wrapper");

openLoginRight.addEventListeneer('click', function(){
    loginWrapper.classList.toggle('open');
});