let menu = document.querySelector(".menu_bar");
let logo = document.querySelector(".logo");
let searchLogin = document.querySelector(".search_login");
let elanBtn = document.querySelector(".elan_btn");
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
        elanBtn.style.display = "none";
        $(elanBtn).fadeOut(300);
        menu.style.right = "5%"
        menu.style.left = "auto"
        menu.style.backgroundColor = "var(--color4)"
        topLine.style.height = "100vh"
    }
    else{
        fav_lang.style.left = "-100%"
        links.style.left = "-100%";
        contact.style.left = "-100%";
        logo.style.position = "static";
        searchLogin.style.display = "flex";
        $(elanBtn).fadeIn(300);
        menu.style.right = "auto"
        menu.style.left = "5%"
        menu.style.backgroundColor = "transparent"
        topLine.style.height = "fit-content"
    }
}