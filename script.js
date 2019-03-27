$(document).ready(function(){
    $(".moblyCores > div").on('click', function () {
        var colorToCopy = $(this).css('backgroundColor')
        console.log(hexc(colorToCopy));        
        colorToCopy = hexc(colorToCopy);
        $('.moblyCores > div').css('opacity', 1);
        $(this).css('opacity', 0.6);
        $('.colorToCopytxt').text(colorToCopy)
        
        var txtEl = $(".colorToCopytxt");
        txtEl.select();
        document.execCommand('copy');
    });
})

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
    return color;
}