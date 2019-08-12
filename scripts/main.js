$(document).ready(function () {
    var colorDef = 'dark';
    $(".swt_inp").click(function () {
        if (colorDef == 'dark') {
            $("body").css("background-color", "white");
            $("body").css("color", "#444452");
            $(".project_screenshot").css("opacity", "0.85");
            $(".project_screenshot_right").css("opacity", "0.85");
            $(".project_title").css("color", "#171c28");
            $(".desc_card").css("color", "white");
            $(".desc_card").css("background-color", "#007bff");

            colorDef = 'light';
        } else {
            $("body").css("background-color", "#171c28");
            $("body").css("color", "white");
            $(".project_screenshot").css("opacity", "0.25");
            $(".project_screenshot_right").css("opacity", "0.25");
            $(".project_title").css("color", "white");
            $(".desc_card").css("color", "#a8b2d1");
            $(".desc_card").css("background-color", "#172a45");
            colorDef = 'dark';
        }

    });
});


//$('input.cb-value').prop("checked", true);
$('.swt_inp').click(function () {
    var mainParent = $(this).parent('.swt_tgl');
    if ($(mainParent).find('input.swt_inp').is(':checked')) {
        $(mainParent).addClass('swt_act');
    } else {
        $(mainParent).removeClass('swt_act');
    }

})

sal();