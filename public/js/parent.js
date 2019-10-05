$(document).ready(function () {

  console.log("Doc is ready!");
  $('.behavTab').hide()


  // buttons are displayed to show hidden tabs

  $('.parAncmnt').hide()
  $('.parCalend').hide()
  $('.parAttendGrade').hide()
  $('.parWeather').hide()




  //moment JS 
  var currTime = moment().format('llll');
  var parDate = moment().format('L')

  console.log(currTime);

  $('.dateMoment').text(currTime);
  $('.dateParent').text(parDate);




});


$('.parTabOne').on('click', function () {
  $('.parAncmnt').toggle()

  $('.parCalend').hide()
  $('.parAttendGrade').hide()
  $('.parWeather').hide()


});


$('.parTabTwo').on('click', function () {
  $('.parCalend').toggle()
  $('.parAncmnt').hide()
  $('.parAttendGrade').hide()
  $('.parWeather').hide()


});

$('.parTabThree').on('click', function () {
  $('.parAttendGrade').toggle()
  $('.parAncmnt').hide()
  $('.parCalend').hide()
  $('.parWeather').hide()


  // $('html, body').animate({
  //   scrollTop: $(".parAttendGrade").offset().top
  // });



});


$('.parTabFour').on('click', function () {
  $('.parWeather').toggle()
  $('.parAncmnt').hide()
  $('.parCalend').hide()
  $('.parAttendGrade').hide()








});




$('.powerschoolLink').on('click', function (e) {
  e.preventDefault();
  window.open('https://www.powerschool.com/sign-in/', '_blank')


});





$('.backBtn').on('click', function () {
  $('.parAncmnt').hide()
  $('.parCalend').hide()
  $('.parAttendGrade').hide()
  $('.parWeather').hide()



});










// $(".contactFontLink").hover(function () {
//   // $(this).addCss("Contact Us!");
//   // $(this).text("Contact Us!");
// });
//-----------------------------------------------------------------------------------------------

//create if statement to check that form has been filled out completely


//-----------------------------------------------------------------------------------------------
$("#formParent").submit(function (event) {
  var textar = $("#inputPassword2");
  var studentId = parseInt(textar.val().trim());
  if (textar.val().trim() === "") {
    // No message, add red highlighting to indicate error
    textar.css("box-shadow", "0 0 12px #811");
    $('.parentLogAppend').text("Please enter the student's ID")
    $('.parentLogAppend').slideDown()
    event.preventDefault();

  } else {
    API.getClassroomsbyId(studentId)
    console.log('form is completed')

    /////////////////////////////////////////////////////////////////////////////////////

    //display result of id search here ---- 
    //place to call ajax to call api for mysql: pull all data then we can push to specific div
    //

    /////////////////////////////////////////////////////////////////////////////////////

    // $('.parentLogAppend').text("Please enter a comment!")

    // var formVal = $('.idForm').val().trim()

    //   var stuIdParLog = $('#inputPassword2').val().trim('');
    // console.log("student ID for parent log-in: " + stuIdParLog);


    $('.jumbotron').slideUp()

    $('.behavTab').show()


    event.preventDefault();


  }
});



// api to call openWeather


var APIkey = 'fb0ce6d825db30974bf096625bf170a2';
var zipCode = '75206'

var queryURL = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&APPID=' + APIkey;


$.ajax({
  url: queryURL,
  method: 'GET'

}).then(function (weather) {


  // city///////////////////////////////////////////////
  console.log(weather)


  var cityName = weather.name
  console.log(cityName)


})





//widget--------------------------------------------------------------------------------//

window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 15, cityid: '4684888', appid: 'fb0ce6d825db30974bf096625bf170a2', units: 'imperial', containerid: 'openweathermap-widget-15', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();
//--------------------------------------------------------------------------------------------//

