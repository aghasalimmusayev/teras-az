let menu = document.querySelector(".menu_bar");
let logo = document.querySelector(".logo");
let searchLogin = document.querySelector(".search_login");
let links = document.querySelector(".links");
let contact = document.querySelector(".contact");
let fav_lang = document.querySelector(".fav_lang");
let topLine = document.querySelector(".top_line");

menu.onclick = function(){
    if($("#checkbox").is(":checked")){
        links.style.left = 0;
        logo.style.position = "absolute";
        searchLogin.style.display = "none";
        menu.style.right = "5%"
        menu.style.left = "auto"
        menu.style.backgroundColor = "var(--color4)"
        document.body.style.overflow = 'hidden'
        document.body.style.height = '100vh'
    }
    else{
        links.style.left = "-100%";
        logo.style.position = "static";
        searchLogin.style.display = "flex";
        menu.style.right = "auto"
        menu.style.left = "5%"
        menu.style.backgroundColor = "transparent"
        document.body.style.overflow = ''
        document.body.style.height = ''
    }
}

function searchBoxOpen(){
    $(".searching_box").slideToggle();
}