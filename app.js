const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


$('.icon-menu').onclick = function() {
    $('.header__right').style.display = 'flex'
    $('.icon-menu').style.display = 'none'
}

$('.btn-close').onclick = function() {
    $('.icon-menu').style.display = 'block'
    $('.header__right').style.display = 'none'

}