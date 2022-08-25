const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


$('.icon-menu').onclick = () => {
    $('.icon-menu').classList.add('active')
    $('.header__right').classList.add('active')
    $('.btn-close.active').classList.remove('active')
}

$('.btn-close').onclick = () => {
    $('.btn-close').classList.add('active')
    $('.header__right.active').classList.remove('active')
    $('.icon-menu.active').classList.remove('active')
}

// remove tag <br/>
console.log()

;(() => {
    if(screen.width < 768) {
        let result = $('.menu-description h3').innerHTML.split('<br>\n')
        let htmls = ''
        let txt = result.forEach(text => {
            htmls += text.trim() + ' '
        });
        $('.menu-description h3').innerText = htmls
    } 
})()
