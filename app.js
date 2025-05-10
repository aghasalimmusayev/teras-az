let menu = document.querySelector(".menu_bar");

menu.onclick = function(){
    if($("#checkbox").is(":checked")){
        $(".vh100").slideDown();
    }
    else{
        $(".vh100").slideUp();
    }
}