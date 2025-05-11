let menu = document.querySelector(".menu_bar");

menu.onclick = function(){
    if($("#checkbox").is(":checked")){
        document.querySelector(".fav_lang").style.display = "flex"
        $(".links").slideDown();
        $(".contact").slideDown();
        document.querySelector(".third_line").style.display = "flex";
        document.querySelector(".first_line").style.display = "none";
        document.querySelector(".menu_bar").style.right = "0"
        document.querySelector(".menu_bar").style.left = "auto"
        document.querySelector(".menu_bar").style.backgroundColor = "var(--color4)"
    }
    else{
        document.querySelector(".fav_lang").style.display = "none"
        $(".links").slideUp();
        $(".contact").slideUp();
        document.querySelector(".third_line").style.display = "none";
        document.querySelector(".first_line").style.display = "flex";
        document.querySelector(".menu_bar").style.right = "auto"
        document.querySelector(".menu_bar").style.left = "0"
        document.querySelector(".menu_bar").style.backgroundColor = "transparent"
    }
}