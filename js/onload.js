function animationOnload() {
    $('body').addClass('on_load');

    const perfData = window.performance.timing;
    const pageLoadTime = (perfData.domComplete - window.performance.timing.navigationStart) / 1000;

    if (pageLoadTime < 2) {
        setTimeout(function () {
            $('#animationLoad').remove();
        }, 2000);
    }else{
        $('#animationLoad').remove();
    }
}

$('#animationLoad').wrapInner("<span></span>");

$(window).on('load', function () {
    animationOnload();
});
