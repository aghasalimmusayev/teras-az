let menu = document.querySelector(".menu_bar");

menu.onclick = function(){
    if($("#checkbox").is(":checked")){
        $(".contact").slideDown();
        $(".links").slideDown();
        $(".third_line").slideDown();
    }
    else{
        $(".contact").slideUp();
        $(".links").slideUp();
        $(".third_line").slideUp();
    }
}