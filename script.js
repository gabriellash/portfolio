$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    /**navbar toggle script */
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["","Cybersecurity Graduate", "Tech Enthusiast", "Content Creator"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["", "Cybersecurity Graduate", "Tech Enthusiast", "Content Creator"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true
});