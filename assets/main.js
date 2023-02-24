const mobileButtonMenu = document.querySelector(".navbar__mobile-menu-toggle.mobile-only .button--menu");
const mobileCloseMenu = document.querySelector(".navbar__mobile-menu-toggle.mobile-only .button--close")
const mobileHeaderMenu = document.querySelector(".header-mobile-menu");

console.log(mobileButtonMenu,mobileHeaderMenu)
mobileButtonMenu.addEventListener('click',()=>{
    mobileHeaderMenu.classList.remove('hidden');
    mobileButtonMenu.classList.add('hidden');
    mobileCloseMenu.classList.remove('hidden');
})

mobileCloseMenu.addEventListener('click',()=>{
    mobileHeaderMenu.classList.add('hidden');
    mobileButtonMenu.classList.remove('hidden');
    mobileCloseMenu.classList.add('hidden');
})