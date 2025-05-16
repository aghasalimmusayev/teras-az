let etrafli = document.querySelector(".etarfli_btn");
let sifirla = document.querySelector(".sifirla");
let etrafliConetnt = document.querySelector(".etrafli_axtar_conetnt");

function etrafliAxtar(){
    // $(etrafliConetnt).slideDown()
    // etrafliConetnt.style.maxHeight = etrafliConetnt.scrollHeight + "px";
    // etrafliConetnt.style.opacity = "1";
    etrafliConetnt.style.display = "flex"
    etrafli.style.display = "none";
    sifirla.style.display = "initial";
}