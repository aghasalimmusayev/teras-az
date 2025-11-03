let sekillereBax = document.querySelector(".sekillere_bax");

sekillereBax.addEventListener('click', function() {
    document.querySelector('.butun_fotolar_slider').classList.add('active');
});
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.butun_fotolar_slider').classList.remove('active');
});
document.querySelector('.butun_fotolar_slider').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});
