$(function () {
    // 윈도우 300px 스크롤하면 gotop 보이기
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }
    })

    // gotop을 클릭하면 이로 올라가도록 설정
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: '0',
        }, 1000)
    })

    // 요소,stop().animate({속성 : 속성값}, 시간)
})
