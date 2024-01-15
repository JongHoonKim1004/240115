/* YES NOW 제외 메인 슬라이더 화면전환 */
$(function(){
    $("#slider-main-ul > li").not(":first").mouseover(function(){
        $(".slider-sub-img").first().show();
        $(".slider-sub-title:first").css({backgroundColor:"#302f2f"}).children("a").css({color:"white"})
        $(".slider-sub-title").mouseover(function(){
            $(".slider-sub-title").children('a').css({color:"#666" ,backgroundColor:"#f8f8f8"});
            $(this).children("a").css({color:"white" ,backgroundColor:"#302f2f"});
            $(".slider-sub-img").hide();
            $(this).siblings(".slider-sub-img").show();
        });
    });
});