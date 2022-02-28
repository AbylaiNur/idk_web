$(document).ready(function(){
  $('.card').hover(
      function() {
          $(this).animate({
              marginTop: "-=1%"
          }, 200);
      },
      function() {
          $(this).animate({
              marginTop: "0%"
          }, 200);
      }
  );
});

document.getElementById("#audio-pacific-rim").addEventListener(("click"), function() {
  var audio = new Audio('audio/audio-pacific-rim.mp3');
  alert('Booooooooooo');
  audio.play();
});
/* doesn't work */
document.getElementById("contact-tag").addEventListener(("click"), function() {
  alert("hmm");
  document.getElementById("contact-tag").style.color="blue";
});

$("h1").on("click", function(event) {
  $("#contact-tag").css("color", "purple");
});