let etrafli = document.querySelector(".etarfli_btn");
let sifirla = document.querySelector(".sifirla");
let etrafliConetnt = document.querySelector(".etrafli_axtar_conetnt");

function etrafliAxtar(){
    etrafli.style.display = "none";
    sifirla.style.display = "initial";
    etrafliConetnt.style.display = "flex";
    $(etrafliConetnt).slideDown()
}