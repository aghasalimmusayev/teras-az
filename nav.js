let menu = document.querySelector(".menu_bar");
let logo = document.querySelector(".logo");
let searchLogin = document.querySelector(".search_login");
let links = document.querySelector(".links");
let contact = document.querySelector(".contact");
let fav_lang = document.querySelector(".fav_lang");
let topLine = document.querySelector(".top_line");

menu.onclick = function(){
    if($("#checkbox").is(":checked")){
        fav_lang.style.left = "0"
        links.style.left = 0;
        contact.style.left = 0;
        logo.style.position = "absolute";
        searchLogin.style.display = "none";
        menu.style.right = "5%"
        menu.style.left = "auto"
        menu.style.backgroundColor = "var(--color4)"
    }
    else{
        fav_lang.style.left = "-100%"
        links.style.left = "-100%";
        contact.style.left = "-100%";
        logo.style.position = "static";
        searchLogin.style.display = "flex";
        menu.style.right = "auto"
        menu.style.left = "5%"
        menu.style.backgroundColor = "transparent"
    }
}

function searchBoxOpen(){
    $(".searching_box").slideToggle();
}