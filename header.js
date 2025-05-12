let etrafli = document.querySelector(".etarfli_btn");
let sifirla = document.querySelector(".sifirla");
let etrafliConetnt = document.querySelector(".etrafli_axtar_conetnt");

etrafli.onclick = function(){
    etrafli.style.display = "none";
    sifirla.style.display = "initial";
    $(etrafliConetnt).slideDown()
    etrafliConetnt.style.display = "flex";
}