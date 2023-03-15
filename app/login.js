$('.user').css('transform', 'scale(0)');
function hideElement(){
    $('.user').hide();
}setTimeout(hideElement, 300);

function showElement(){
    $('.user.login__container').css('transform', 'scale(1)');
    $('.user.login__container').show();
}setTimeout(showElement, 300);

//Button functions

$('.buttons #forgot__password').click(function(){
    if($('.user.login__container').hasClass('active')){
        $('.user.login__container').css('transform', 'scale(0)');
        $('.user.login__container').removeClass('active');
        function hideElement(){
            $('.user.login__container').hide();
        }setTimeout(hideElement, 300);
    
        function showElement(){
            $('.user.forgot__pass__container').show();
            $('.user.forgot__pass__container').addClass('active');
            $('.user.forgot__pass__container').css('transform', 'scale(1)');
        }setTimeout(showElement, 300);
    }else if($('.user.register__container').hasClass('active')){
        
        $('.user.register__container').css('transform', 'scale(0)');
        $('.user.register__container').removeClass('active');
        function hideElement(){
            $('.user.register__container').hide();
        }setTimeout(hideElement, 300);
    
        function showElement(){
            $('.user.forgot__pass__container').show();
            $('.user.forgot__pass__container').addClass('active');
            $('.user.forgot__pass__container').css('transform', 'scale(1)');
        }setTimeout(showElement, 300);
    }
});

$('.buttons #register__button').click(function(){
    if($('.user.login__container').hasClass('active')){
        $('.user.login__container').css('transform', 'scale(0)');
        $('.user.login__container').removeClass('active');
        function hideElement(){
            $('.user.login__container').hide();
        }setTimeout(hideElement, 300);
    
        function showElement(){
            $('.user.register__container').show();
            $('.user.register__container').addClass('active');
            $('.user.register__container').css('transform', 'scale(1)');
        }setTimeout(showElement, 300);
    }else{
        $('.user.forgot__pass__container').css('transform', 'scale(0)');
        $('.user.forgot__pass__container').removeClass('active');
        function hideElement(){
            $('.user.forgot__pass__container').hide();
        }setTimeout(hideElement, 300);
    
        function showElement(){
            $('.user.register__container').show();
            $('.user.register__container').addClass('active');
            $('.user.register__container').css('transform', 'scale(1)');
        }setTimeout(showElement, 300);
    }
});

$('.buttons #login__button').click(function(){
    if($('.user.forgot__pass__container').hasClass('active')){
        $('.user.forgot__pass__container').css('transform', 'scale(0)');
        $('.user.forgot__pass__container').removeClass('active');
        function hideElement(){
            $('.user.forgot__pass__container').hide();
        }setTimeout(hideElement, 300);
    
        function showElement(){
            $('.user.login__container').show();
            $('.user.login__container').addClass('active');
            $('.user.login__container').css('transform', 'scale(1)');
        }setTimeout(showElement, 300);
    }else{
        $('.user.register__container').css('transform', 'scale(0)');
        $('.user.register__container').removeClass('active');
        function hideElement(){
            $('.user.register__container').hide();
        }setTimeout(hideElement, 300);
    
        function showElement(){
            $('.user.login__container').show();
            $('.user.login__container').addClass('active');
            $('.user.login__container').css('transform', 'scale(1)');
        }setTimeout(showElement, 300);
    }
});

