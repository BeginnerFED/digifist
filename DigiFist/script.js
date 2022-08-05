$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2.1,
            nav:true,
            navText: ["<img class='left-arrow' src='https://cdn-icons-png.flaticon.com/512/860/860790.png'>","<img class='right-arrow' src='https://cdn-icons-png.flaticon.com/512/130/130884.png'>"],

        },
        600:{
            items:2.1,
            nav:true,
            navText: ["<img class='left-arrow' src='https://cdn-icons-png.flaticon.com/512/860/860790.png'>","<img class='right-arrow' src='https://cdn-icons-png.flaticon.com/512/130/130884.png'>"],

        },
        1000:{
            items:2.5,
            nav:true,
            navText: ["<img class='left-arrow' src='https://cdn-icons-png.flaticon.com/512/860/860790.png'>","<img class='right-arrow' src='https://cdn-icons-png.flaticon.com/512/130/130884.png'>"],
            loop:true
        }
    }
})