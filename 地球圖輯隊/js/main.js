var nav_close = 0;

$("#nav-close").click(function(){
    if(nav_close==0){
        // $("nav").css("width","50px");
        $(".main").css("width","calc(100% - 50px)");
        $(".nav2").css("width","calc(100% - 50px)");
        $(".index2-nav").css("width","calc(100% - 50px)");
        // $(".small_logo").css("margin-top","14px");
        // $("#nav-close").text(">");
        $("#nav-open").text(">");
        $(".nav0").hide();
        $(".nav1").show();
        // alert("QQ");
        nav_close = 1;
        nav_open = 0;
    }else{
        // $("nav").css("width","230px");
        $(".main").css("width","calc(100% - 230px)");
        $(".nav2").css("width","calc(100% - 230px)");
        $(".index2-nav").css("width","calc(100% - 230px)");
        // $(".small_logo").css("margin-top","0");
        // $("#nav-close").text("<");
        $(".nav0").show();
        $(".nav1").hide();
        nav_close = 0;
        nav_open = 1;
    }
});

var nav_open = 0;

$("#nav-open").click(function(){
    if(nav_open==0){
        // $("nav").css("width","50px");
        $(".main").css("width","calc(100% - 230px)");
        $(".nav2").css("width","calc(100% - 230px)");
        $(".index2-nav").css("width","calc(100% - 230px)");
        // $(".small_logo").css("margin-top","14px");
        // $("#nav-open").text(">");
        $(".nav1").hide();
        $(".nav0").show();
        nav_open = 1;
        nav_close = 0;
    }else{
        // $("nav").css("width","230px");
        $(".main").css("width","calc(100% - 50px)");
        $(".nav2").css("width","calc(100% - 50px)");
        $(".index2-nav").css("width","calc(100% - 50px)");
        // $(".small_logo").css("margin-top","0");
        // $("#nav-open").text("<");
        $(".nav1").show();
        $(".nav0").hide();
        nav_open = 0;
        nav_close = 1;
    }
});

