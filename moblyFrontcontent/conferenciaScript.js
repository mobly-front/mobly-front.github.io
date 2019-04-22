try{(function () {
    var targetNode = document.body || document.documentElement ;
    var config = { attributes: false, childList: true, subtree: true };
    var callback = function (mutationsList, observer) {
        for (var mutation of mutationsList) {
            if (mutation.type == 'childList') {
                if ($('.conteinerC').length || $('.conteinerCM').length) {
                    console.log('foi')
          //Start - Countdown plugin Mobile
            !function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});
            //End - Countdown plugin Mobile
            /* ~~~~~~~~~~~~~~~~~~~~~~~~~~ */
        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~ */
        /* Start - Setup do countdown */
        if( typeof $.fn.countdown != "undefined"){
                var cronogetdate = new Date;
                var cronoMonth = new Date();
                cronogetdate = cronogetdate.getDate();
                cronoMonth = cronoMonth.getMonth();
                var cronodate = '2019/'+(cronoMonth+1)+"/"+ (cronogetdate+1) +' 00:00:00';
                $('.crono-campanha').countdown(cronodate, function(event) {
                    var totalHours = event.offset.totalDays * 24 + event.offset.hours;
                    $(this).html(event.strftime(''+totalHours+':%M:%S'));
                });
            
        }
      /* End - Setup do countdown */
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~~ */
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~~ */
      break;

                }
            }
        }
    };
    var observer = new MutationObserver(callback);
    observer.observe(targetNode, config);


})();

}catch(e){}



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
                changeColorLi('bannerfixo')
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

