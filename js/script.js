document.addEventListener('DOMContentLoaded', ()=>{
    console.log('JAVASCRIPT is working');

    // scroll header
    document.addEventListener('scroll', function (e) {
        topPosition = window.scrollY;
        if (topPosition > 100) {
            document.querySelector('.header').classList.add('header-bg')
        }
        else {
            document.querySelector('.header').classList.remove('header-bg')
        }
    });

    //hamburger-menu
    let MenuHamburgerButton = document.querySelector('.menu-hamburger-button')
    let barOne = document.querySelector('.bar-one')
    let barTwo = document.querySelector('.bar-two')
    let barThree = document.querySelector('.bar-three')
    let mobileMenu = document.querySelector('.header-menu-mobil')

    if (MenuHamburgerButton) {
        MenuHamburgerButton.addEventListener('click', () => {
            if (barOne.classList.contains('bar-one-active') || barTwo.classList.contains('bar-two-active') || barThree.classList.contains('bar-three-active')) {
                barOne.classList.remove('bar-one-active')
                barTwo.classList.remove('bar-two-active')
                barThree.classList.remove('bar-three-active')
                mobileMenu.classList.remove('header-menu-mobil-active')
            }
            else {
                barOne.classList.add('bar-one-active')
                barTwo.classList.add('bar-two-active')
                barThree.classList.add('bar-three-active')
                mobileMenu.classList.add('header-menu-mobil-active')
            }

        })
    }
})