const bigThumb = document.querySelector(".big");
const smallThumbs = document.querySelectorAll(".small");

for(var i = 0; i < smallThumbs.length; i++){
  smallThumbs[i].addEventListener("click",changeThumb);
}

function changeThumb(){
  var smallThumbAttribute = this.getAttribute("src");
  bigThumb.setAttribute("src",smallThumbAttribute);
}

