function myFunction() {
  var myWindow = window.open("https://kangmorae.github.io/mac", "맥 코스메틱 모바일뷰", "width=360,height=640");
}

function myFunction2() {
  var myWindow = window.open("https://kangmorae.github.io/sealife", "부산 아쿠아리움 모바일뷰", "width=360,height=640");
}

/* 모달창 (팝업창) */

window.onload = function(){ if((parseInt(document.getElementByClass('close').offsetHeight) - parseInt(window.document.body.clientHeight)) > 20) { window.document.body.scroll = "auto"; window.resizeBy(18,0); } }


$(document).ready(function(){
    
    var scroll = 0;
    var scroll2 = 0;

    $(window).scroll(function () {
        scroll = $(window).scrollTop();
    })

    //팝업창 첫번째
    $(".popWrap1,.popCon1").hide();
    
    $(".img01").click(function(e){
        e.preventDefault();
        $(".popWrap1,.popCon1").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap1,.close").click(function(){ 
        $(".popWrap1,.popCon1").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 두번째
    $(".popWrap2,.popCon2").hide();
    
    $(".img02").click(function(e){
        e.preventDefault();
        $(".popWrap2,.popCon2").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap2,.close").click(function(){ 
        $(".popWrap2,.popCon2").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 세번째
    $(".popWrap3,.popCon3").hide();
    
    $(".img03").click(function(e){
        e.preventDefault();
        $(".popWrap3,.popCon3").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap3,.close").click(function(){ 
        $(".popWrap3,.popCon3").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 네번째
    $(".popWrap4,.popCon4").hide();
    
    $(".img04").click(function(e){
        e.preventDefault();
        $(".popWrap4,.popCon4").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap4,.close").click(function(){ 
        $(".popWrap4,.popCon4").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 다섯번째
    $(".popWrap5,.popCon5").hide();
    
    $(".img05").click(function(e){
        e.preventDefault();
        $(".popWrap5,.popCon5").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap5,.close").click(function(){ 
        $(".popWrap5,.popCon5").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 여섯번째
    $(".popWrap6,.popCon6").hide();
    
    $(".img06").click(function(e){
        e.preventDefault();
        $(".popWrap6,.popCon6").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap6,.close").click(function(){ 
        $(".popWrap6,.popCon6").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 일곱번째
    $(".popWrap7,.popCon7").hide();
    
    $(".img07").click(function(e){
        e.preventDefault();
        $(".popWrap7,.popCon7").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap7,.close").click(function(){ 
        $(".popWrap7,.popCon7").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })

})
