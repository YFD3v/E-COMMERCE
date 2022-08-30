$(function(){
    
    var curSlide = 0;
    var delay = 3;
    var maxSlide = $('.slider-single').length - 1;
    
    initSlider();
    changeSlide();

    function initSlider(){
        //Eu quero que mostra apenas o primeiro Bg
        $('.slider-single').hide();
        $('.slider-single').eq(0).show();
        for(var i = 0; i < maxSlide+1; i++){
            var content = $('.bullets').html();
            if(i == 0)
                content+='<span class="active-slider"></span>';
            else
                content+='<span></span>';
            $('.bullets').html(content);
        }
    }
       
    
    
    var interval;
    function changeSlide(){
        interval = setInterval(function(){
            $('.slider-single').eq(curSlide).stop().fadeOut(1500);
            curSlide++;
            if(curSlide > maxSlide)
                curSlide = 0;
                $('.slider-single').eq(curSlide).stop().fadeIn(1500);  
                //Trocar bulles da navegaçãod o slider; 
                $('.bullets span').removeClass('active-slider');
                $('.bullets span').eq(curSlide).addClass('active-slider');
        },3000);
    }

    $('.banner-cta').on('click', '.bullets span', function(){
        var currentBullet = $(this);   
        $('.slider-single').eq(curSlide).stop().fadeOut(1500);
        curSlide = currentBullet.index();
        $('.slider-single').eq(curSlide).stop().fadeIn(1500);  
        $('.bullets span').removeClass('active-slider');
        currentBullet.addClass('active-slider'); 
        clearInterval(interval);
        changeSlide();
    })
    


})

/*SLIDER ESPECIAL*/



$(function(){
    var curSlide = 0;
    var maxSlide = $('.slider-especial').length - 1;
    
    initSlider();
    changeSlide();

    function initSlider(){
        //Eu quero que mostra apenas o primeiro Bg
        $('.slider-especial').hide();
        $('.slider-especial').eq(0).show();
        for(var i = 0; i < maxSlide+1; i++){
            var content = $('.bullets-especial').html();
            if(i == 0)
                content+='<span class="active-slider"></span>';
            else
                content+='<span></span>';
            $('.bullets-especial').html(content);
        }
    }
    
    var interval;
    function changeSlide(){
        interval = setInterval(function(){
            $('.slider-especial').eq(curSlide).stop().fadeOut(2500);
            curSlide++;
            if(curSlide > maxSlide)
                curSlide = 0;
                $('.slider-especial').eq(curSlide).stop().fadeIn(2500);  
                //Trocar bulles da navegaçãod o slider; 
                $('.bullets-especial span').removeClass('active-slider');
                $('.bullets-especial span').eq(curSlide).addClass('active-slider');
        },5000);
    }

    $('.especial').on('click', '.bullets-especial span', function(){
        var currentBullet = $(this);   
        $('.slider-especial').eq(curSlide).stop().fadeOut(2500);
        curSlide = currentBullet.index();
        $('.slider-especial').eq(curSlide).stop().fadeIn(2500);  
        $('.bullets-especial span').removeClass('active-slider');
        currentBullet.addClass('active-slider'); 
        clearInterval(interval);
        changeSlide();
    })

})


    
    

    
    

