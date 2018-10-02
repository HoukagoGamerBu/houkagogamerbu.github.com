/******************************************************/
/*                   main.js                          */
/******************************************************/

/* Character slide */
$(document).ready(function () {

    var length = $("#slider li").length
    var width = 1100
    var height = 1200
    var counter = 0

    $("#slider").css({
        width: width,
        height: height,
        overflow: "hidden"
    })
    $("#slider ul").css({
        width: width * length
    })
    $("#slider li").css({
        width: width,
        height: height,
        float: "left"
    })

    /* 移動処理 */
    var moveTo = function (index) {
        index = index || 0
        index = index % length
        $("#slider ul").animate({
            marginLeft: -width * index
        })
    }


    /* キャラクターの選択ボタン */
    $(".character_select_button #neptune").on("click", function () {
        moveTo(0)
        counter = 0
    })
    $(".character_select_button #noire").on("click", function () {
        moveTo(1)
        counter = 1
    })
    $(".character_select_button #blanc").on("click", function () {
        moveTo(2)
        counter = 2
    })
    $(".character_select_button #vert").on("click", function () {
        moveTo(3)
        counter = 3
    })
    $(".character_select_button #chrom").on("click", function () {
        moveTo(4)
        counter = 4
    })
    $(".character_select_button #histoire").on("click", function () {
        moveTo(5)
        counter = 5
    })
    $(".character_select_button #firin").on("click", function () {
        moveTo(6)
        counter = 6
    })
    $(".character_select_button #kukei").on("click", function () {
        moveTo(7)
        counter = 7
    })
    $(".character_select_button #mai").on("click", function () {
        moveTo(8)
        counter = 8
    })
    $(".character_select_button #surara").on("click", function () {
        moveTo(9)
        counter = 9
    })

    /* right,left cuser */
    $(".Left_cuser").on("click", function () {
        counter--
        if (counter < 0) { counter = length-1 }
        moveTo(counter)
    })
    $(".Right_cuser").on("click", function () {
        if (counter > length-1) { counter = 0 }
        counter++
        moveTo(counter)
    })

    window.moveSlider = moveTo
});



/* pagetop */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#pagetop').fadeIn();
        } else {
            $('#pagetop').fadeOut();
        }
    });

    $("#pagetop").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 600);
    });
});