$(document).ready(function () {

    console.log('admin doc ready)')

    $('.parTabUno').hide();
    $('.parTabDos').hide();
    $('.parTabTres').hide();
    $('.parTabQuar').hide();

    $('.adminBodyOne').hide();  
    $('.adminBodyTwo').hide();  
    $('.adminBodyThree').hide();  
    $('.adminBodyFour').hide();  




    $('.adminIdBtn').on('click', function (e) {
        e.preventDefault()
        // $('.adminBody').toggle()
        $('.jumbotron').slideUp()
        $('.parTabUno').show();
        $('.parTabDos').show();
        $('.parTabTres').show();
        $('.parTabQuar').show();



        var curTime = moment().format('LLLL');
        console.log(curTime)

        $('.currTime').text(curTime)





    })

    $('.parTabUno').on('click', function(){

        $('.adminBodyOne').toggle();
        $('.adminBodyTwo').hide();
        $('.adminBodyThree').hide();  
    $('.adminBodyFour').hide(); 

    })


    
    $('.parTabDos').on('click', function(){

        $('.adminBodyTwo').hide();
        $('.adminBodyOne').hide();
        $('.adminBodyThree').hide();          
        $('.adminBodyFour').toggle(); 

    })
    
    $('.parTabTres').on('click', function(){

        $('.adminBodyTwo').hide();
        $('.adminBodyOne').hide();
        
        $('.adminBodyFour').hide(); 
        $('.adminBodyThree').toggle(); 

    })
    
    $('.parTabQuar').on('click', function(){

        $('.adminBodyTwo').toggle();
        $('.adminBodyOne').hide();
        $('.adminBodyThree').hide();  
        $('.adminBodyFour').hide(); 

    })





    $('.adminCommentLogSub').on('click', function(e){
        e.preventDefault();
        var adminAnnct = $('#adminAnncmt').val().trim('')
        console.log(adminAnnct)

        //to post in teacher and parent page

    })

})

