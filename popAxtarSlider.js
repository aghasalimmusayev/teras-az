document.querySelector(".pop_button_next").onclick = function(){
    let widthSlide = document.querySelector(".pop_axtar_slide").offsetWidth;
    document.querySelector(".pop_axtaris_box").scrollLeft += widthSlide;
}
document.querySelector(".pop_button_prev").onclick = function(){
    let widthSlide = document.querySelector(".pop_axtar_slide").offsetWidth;
    document.querySelector(".pop_axtaris_box").scrollLeft -= widthSlide;
}