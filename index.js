
window.addEventListener('scroll',function(e) {
    const scrollHeader = document.querySelector('.header');
    const scrollBody = document.querySelector('body');
    if(window.pageYOffset >70){
        scrollHeader.classList.add('show');
    }else{
        scrollHeader.classList.remove('show');
    }
})

    // const clickBtn= document.querySelector('.btn');
    // clickBtn.addEventListener('click',function(){
    //     const content = document.querySelector('.content__second');
        
    // })
    $(document).ready(function(){
        $(".content__top--below a").click(function(event){
            event.preventDefault();
             post =$(this).attr('href');
             position=$(post).offset().top;
             $('html, body').animate({scrollTop: position-100},500);
        })
     })