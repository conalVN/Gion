const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


$('.icon-menu').onclick = function() {
    $('.header__right').style.display = 'flex'
    $('.icon-menu').style.display = 'none'
}

$('.btn-close').onclick = function() {
    $('.header__right').style.display = 'none'
    $('.icon-menu').style.display = 'block'
}

$$('.menu-link').forEach((el, i) => {
    el.addEventListener('click', () => {
        closeMenu()
    })
});

function closeMenu() {
    $('.header__right').style.display = 'none'
    $('.icon-menu').style.display = 'block'
}