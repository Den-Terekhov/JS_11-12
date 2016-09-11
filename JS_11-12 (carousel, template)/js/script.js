/*Carousel*/
$(function() {
  $('div.my_carousel').my_carousel();
});



/*Template*/
$(function() {
  var html = $('#myTemplate').html();

  var data = {
    fullName: "Иванов Иван Иванович",
    profession: "Студент заборостроительного университета",
    answers:[
      {answer: "Заборы строить неинтересно"},
      {answer: "Платят мало"},
      {answer: "Приходится работать по ночам"},
    ],
    phoneNumber: "+38 123 456 78 90",
    fbProfile: "https://www.facebook.com",
  };

  var content = tmpl(html, data);

  $('body').append(content);

})