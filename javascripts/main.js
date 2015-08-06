$(document).ready(function(){
  $.ajax({
  	url: "http://stevebrownlee.com:8081/foodtype"
  }).done(function(foodtype) {
  	console.log(foodtype);
  })
});