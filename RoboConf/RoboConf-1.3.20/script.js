var MOBILE = true

$(document).ready(function () {

    /*Valor da textbox que irá servir para copiar o código do CMS e da plataforma do APP*/
    $('.jsToCopy').val("var arrDesk = []; var iD = 0; var arrMob = []; var iM = 0; var srcApp = []; var arrApp = []; var iA = 0; var txtDeskF = ''; var txtMobF = ''; var txtAppF = ''; var teste = ''; $('#folder-items-content textarea').each(function () { if ($(this).val().indexOf('obile') == -1 && $('#main h2').find('span').eq(1).html().indexOf('obile') == -1) { if ($(this).parent().siblings().find('label').text().indexOf('CSS') != -1) { arrDesk[iD] = '<style>' + $(this).val() + '.sliderSS a, .conteiner a, .subCampanhas > div{height: 360px; display: block;} .sliderSS--topo{height: auto;} .campanhaPrincipal > .conteiner a { height: auto; } .conteiner{margin: 0 auto; width: 960px;} @font-face{font-family:m4-awesome;src:url(https://staticmobly.akamaized.net/fonts/mobly4/icons/v1/m4-awesome.eot);src:url(https://staticmobly.akamaized.net/fonts/mobly4/icons/v1/m4-awesome.eot?#iefix) format(\"embedded-opentype\"),url(https://staticmobly.akamaized.net/fonts/mobly4/icons/v1/m4-awesome.woff) format(\"woff\"),url(https://staticmobly.akamaized.net/fonts/mobly4/icons/v1/m4-awesome.ttf) format(\"truetype\"),url(https://staticmobly.akamaized.net/fonts/mobly4/icons/v1/m4-awesome.svg#m4-awesome) format(\"svg\");font-weight:400;font-style:normal}*, :after, :before { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } .icon-caret-right:before {    content:\"\\\\70\";} [class*=\" icon-\"]:before, [class^=icon-]:before, [data-icon]:before { font-family: m4-awesome!important; font-style: normal!important; font-weight: 400!important; font-variant: normal!important; text-transform: none!important; speak: none; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } i, cite, em, var, address, dfn { font-style: italic; }</style>'; iD++; } else if ($(this).parent().siblings().find('label').text().indexOf('JS') != -1) { arrDesk[iD] = \"<script>\" + $(this).val() + \"</script>\"; iD++; } else { arrDesk[iD] = $(this).val().replace('<div class=\"sliderSS--topoLoading\"></div>', ''); iD++; } var txtDesk = \"\"; for (var i = 0; i < arrDesk.length; i++) { txtDesk += arrDesk[i]; } txtDeskF = \"<div class='conteinerC'>\" + txtDesk + \"</div>\"; } else { if ($(this).parent().siblings().find('label').text().indexOf('JS') != -1) { arrMob[iM] = \"<script>\" + $(this).val() + \"<\/script>\"; iM++; } else { arrMob[iM] = $(this).val(); iM++; } var txtMob = \"\"; for (var i = 0; i < arrMob.length; i++) { txtMob += arrMob[i]; } txtMobF = \"<div class='conteinerCM'>\" + txtMob + \"</div>\"; } }); $(\".content-image\").each(function () { srcApp[iA] = $(this).children().find(\".form-control\").eq('0').val(); var imgSrc = $(this).children().last().find(\".form-control\").val(); arrApp[iA] = imgSrc; iA++; var txtApp = \"\"; for (var i = 0; i < arrApp.length; i++) { txtApp += \"<div><img src='\" + arrApp[i] + \"'><p style='position: absolute; top: 0px;color:#fff; background: #000'>\"+srcApp[i].replace('https://busca.mobly.com.br/hotsite/', '')+\"</p></div>\"; } txtAppF = \"<div class='conteinerCA'>\" + txtApp + \"</div>\"; }); teste = txtDeskF + txtMobF + txtAppF; copy(teste); console.log('copiou')");

});
$(document).ready(function () {

    /*Clique na textbox com o código */
    $('.jsToCopy').on('click', function () {
        /*Alteração na label que indica o que fazer.*/
        var txtEl = $('.jsToCopy');
        txtEl.select();
        document.execCommand('copy');
        $('.warning__txt').css('background', '#ff7675').html('Copiado!').addClass('actived-box');
        $('.warning__arrow').css('border-right', '6px solid #ff7675');
    });
    
    $('.warning__txt').on('click', function(){
        if(!$(this).hasClass('actived-box')){
            $(this).html('Na caixa de cima, bobinho')
        }
    })

    /*Clique do botão */
    $('.formGerar__conferir').on('click', function () {
        /*Retorna ao padrão */
        var teste = $('.htmlCode').val()
        $('.conteinerC, .conteinerCM, .conteinerCA').remove();
        $('.warning__txt').css('background', '#636e72').html('Clique na caixa de texto').removeClass('actived-box');
        $('.warning__arrow').css('border-right', '6px solid #636e72');
        $('.cronoSpace > div, .cronoSpace > p').hide()
        $('body').append(teste);
        $('.htmlCode').val('');

        /*Para cada imagem nos conteiners de Desk e Mobile irá pegar a data-src, substituir o "Media_Base_URL" e transformar em SRC  */
        $('.conteinerC img, .conteinerCM img').each(function () {
            var esrc = $(this).data('src');
            esrc = esrc.replace('[MEDIA_BASE_URL]', '');
            console.log(esrc);
            $(this).attr('src', "https://staticmobly.akamaized.net" + esrc);
        });
        /*Das divs e conteiners, pegará o data-bg e fará as substituições, tornando a imagem um background */
        $('.conteinerC div, .conteinerC a').each(function () {
            if ($(this).data('bg')) {
                var ebg = $(this).data('bg');
                ebg = ebg.replace('[MEDIA_BASE_URL]', '');
                console.log(ebg);
                $(this).css('background-image', "url('https://staticmobly.akamaized.net" + ebg + "')");
            }
        });
        /*Alteração no a href para mandar ao link certo */
        $('.conteinerC a, .conteinerCM a').each(function () {
            $(this).attr('href', 'https://www.mobly.com.br' + $(this).attr('href'));
            $(this).attr('target', '__blank');
        });

        /*Modificações no CSS */
        $('.modifier--fadeIn').css('opacity', '1');
        $('.conteinerCM .callToAction').css('width', '148.9px').css('font-size', $('.conteinerCM .callToAction').css('font-size')/5 );

        $('.conteinerCM .callToAction').each(function(){
            $(this).css('width', '148.9px').css('font-size', (parseInt($(this).css('font-size'))/4.6075)+"px");
        })
        $('.conteinerCM .catsSwipe__cont__cat__icon').css('width', '56px');
        $('.conteinerCM .catsSwipe__cont__cat__name').css('font-size', '9.6px');
        $('.conteinerC').append('<style>.conteinerC .nEspecial{margin-top: 0px !important} .conteinerC .bannerId__title{top: 0 !important} .conteinerC .modifier--fadeIn{transform: translateY(0px)}</style>');


        /*Identifica qual o cms está sendo conferido e muda a cor do texto para verde.*/
        function changeColorLi(txt) {
            $('.listaCMS__ul li').each(function () {
                if ($(this).html().indexOf(txt) != -1) {
                    $(this).css('color', 'green');
                    return false;
                }
            });
        }
        $('.conteinerC *').each(function () {
            if ($(this).hasClass('sliderSS')) {
                changeColorLi('linha_1')
            } else if ($(this).hasClass('bannerFixo')) {
                changeColorLi('cms_sub')
            } else if ($(this).find('h2.bannerId__title:contains(Novidades)').length) {
                changeColorLi('newness')
            } else if ($(this).find('h2.bannerId__title:contains(Promoções)').length) {
                changeColorLi('promocoes-block')
            }
        });
        $('.conteinerCM *').each(function () {
            if ($(this).hasClass('sliderTop__img')) {
                changeColorLi('mobile-home')
            } else if ($(this).hasClass('subcampanhA__topo__crono')) {
                changeColorLi('mobile-subcampanha')
            }
        });
        if ($('.conteinerCA').length) {
            changeColorLi('mobileapp.')
        }

    });

});

