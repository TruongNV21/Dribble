const mobileButtonMenu = document.querySelector(".navbar__mobile-menu-toggle.mobile-only .button--menu");
const mobileCloseMenu = document.querySelector(".navbar__mobile-menu-toggle.mobile-only .button--close")
const mobileHeaderMenu = document.querySelector(".header-mobile-menu");
const filterViewButton = document.querySelector(".filter-view");
const filterSettingButon = document.querySelector(".filter-settings");
const producFilterShot = document.querySelector(".product__filter-shot");
const choiceDateBox = document.querySelector(".find-shot__input-dropdown-click.date");
const dateOptions = document.querySelector(".find-shot__input-dropdown-click.date .input-dropdown-click__options");
const choiceDownload = document.querySelector('.find-shot__input-dropdown-click.downloads')
const body = document.querySelector('body');

mobileButtonMenu.addEventListener('click',()=>{
    mobileHeaderMenu.classList.remove('hidden');
    mobileButtonMenu.classList.add('hidden');
    mobileCloseMenu.classList.remove('hidden');
    body.classList.add('navbar-open-scroll');
})

mobileCloseMenu.addEventListener('click',()=>{
    mobileHeaderMenu.classList.add('hidden');
    mobileButtonMenu.classList.remove('hidden');
    mobileCloseMenu.classList.add('hidden');
    body.classList .remove('navbar-open-scroll');

})

filterViewButton.addEventListener('click',()=>{
    filterViewButton.classList.toggle('close')
})

filterSettingButon.addEventListener('click',()=>{
    producFilterShot.classList.toggle('hidden')
})

choiceDateBox.addEventListener('click', ()=>{
    choiceDateBox.classList.toggle('hidden')
})

choiceDownload.addEventListener('click', ()=>{
    choiceDownload.classList.toggle('hidden')
})