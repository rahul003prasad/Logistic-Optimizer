$(document).ready(function() {
    $('.tasks').click(() => {
        $('.sub-menu').toggle();
    })


    $("[id='confirmed-btn']").click(function() {
        $('.load-popup').toggle();
    })
    $('#load-yes').click(function() {
        $('.load-popup').hide();
    })
    $('#load-no').click(function() {
        $('.load-popup').hide();
    })

    $("[id='bypass-btn']").click(function () {
        $('.bypass-popup').show();
    })
    $("#bypass-ok").click(function() {
        $('.bypass-reason-popup').hide();
    })
    $("#bypass-no").click(function() {
        $('.bypass-popup').hide();
    })

    $("#bypass-yes").click(function() {
        $('.bypass-popup').hide();
        $('.bypass-reason-popup').show();
    })
});
