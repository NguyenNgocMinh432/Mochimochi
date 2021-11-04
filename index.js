
window.addEventListener('scroll',function(e) {
    const scrollHeader = document.querySelector('.header');
    const scrollBody = document.querySelector('body');
    if(window.pageYOffset >70){
        scrollHeader.classList.add('show');
    }else{
        scrollHeader.classList.remove('show');
    }
})