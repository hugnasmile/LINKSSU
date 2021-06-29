// var hearts = document.querySelectorAll('.fa-heart');

// for(var i = 1; i < hearts.length; i++){
//   if(hearts.className="far fa-heart"){
//     hearts[i].addEventListener("click",fillHeart);
//   }
//   else if(hearts.className="fas fa-heart"){
//     hearts[i].addEventListener("click",emptyHeart);
//   }
// }

// function fillHeart(){
//   this.className = "fas fa-heart";
// }
// function emptyHeart(){
//   this.className = "far fa-heart";
// }

var fillHearts = document.querySelectorAll('.hearts');

fillHearts.forEach(function(hearts){
  hearts.addEventListener("click",function(){
    hearts.classList.toggle('fas')
  });
})

function detailProfile()  {
    window.location.href = 'profile.html'
  };


var bigThumb = document.querySelector(".big");
var smallThumbs = document.querySelectorAll(".small");

for(var i = 0; i < smallThumbs.length; i++){
  smallThumbs[i].addEventListener("click",changeThumb);
}

function changeThumb(){
  var smallThumbAttribute = this.getAttribute("src");
  bigThumb.setAttribute("src",smallThumbAttribute);
}