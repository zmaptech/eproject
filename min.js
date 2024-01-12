var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
      0:{
         sliderPerView: 1,
      },
      768:{
         sliderPerView: 2,
      },
      991:{
         sliderPerView: 3,
      },
      
    },
 });

 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}