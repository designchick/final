// NAV MENU APPEARS ON SCROLL
(function($) {          
            $(document).ready(function(){                    
                $(window).scroll(function(){                          
                    if ($(this).scrollTop() > 500) {
                        $('.mobile-nav').fadeIn(500);
                    } else {
                        $('.mobile-nav').fadeOut(500);
                    }
                });
            });
        })(jQuery);

// NAV BOOKMARK AUTO SCROLL

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 700);
            return false;
        }
    }
});

$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 450;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},700);
                    
            }
        }); 
    
    });
});