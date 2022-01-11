$(document).ready(function(){
    $(window).scroll(function(){

        if($(this).scrollTop()){
            $('#main-navbar').addClass('scroll-bg-nav');
        }else {
            $('#main-navbar').removeClass('scroll-bg-nav');
        }

    });
})

    
// $(document).ready(function(){
//     $(window).scroll(function(){

//         // navigaation scroll effect 
//         if($(this).scrollTop()){
//             $('.navbar').addClass('bg-traparant-scroll');
//         }
//         else
//         {
//             $('.navbar').removeClass('bg-traparant-scroll')
//         }
//     });
// });