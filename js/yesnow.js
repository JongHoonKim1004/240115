/* 메인 슬라이더 카테고리 전환 */
$(function(){
    $("#slider-main-ul > li:first").css({backgroundColor:"#0080ff"}).children("a").css({color:"white"});
    $(".li-menu").hide();
    $(".slider-yesnow").show();
    $("#slider-main-ul > li").mouseover(function(){
        $("#slider-main-ul > li").css({backgroundColor:"white"}).children("a").css({color:"black"});
        $(this).css({backgroundColor:"#0080ff"}).children("a").css({color:"white"});
        $("#slider-main-ul > li").children('.li-menu').hide();
        $(this).children(".li-menu").show();
    });
});