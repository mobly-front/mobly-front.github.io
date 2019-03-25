
$(document).ready(function(){
    $('.codeToCopy').on('click', function () {
        var txtEl = $(this).find('textarea');
        txtEl.select();
        document.execCommand('copy');
        $('.warning__txt').css('background', '#636e72').html('Clique na caixa de texto');
        $(this).siblings().find('.warning__txt').css('background', '#ff7675').html('Copiado!').addClass('actived-box');
    })

    $('.warning__txt').on('click', function(){
        if(!$(this).hasClass('actived-box')){
            $(this).html('Na caixa de cima, bobinho')
        }
    })
})