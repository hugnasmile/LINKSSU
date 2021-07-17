var sidenav = document.getElementById("mySidenav");

function openNav(){
  sidenav.style.width="200px";
}
function closeNav(){
  sidenav.style.width="0";
}

var fillHearts = document.querySelectorAll('.hearts');

fillHearts.forEach(function(hearts){
  hearts.addEventListener("click",function(){
    hearts.classList.toggle('fas')
  });
})

function detailProfile()  {
    window.location.href = 'profile_person.html'
  };

function detailTeamProfile()  {
  window.location.href = 'profile_team.html'
};
function detailClassTeamProfile()  {
  window.location.href = 'profile_team2.html'
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


var target = document.getElementById("target");


        function deleteToDo(event){
            const btn = event.target; // 현재 클릭한 버튼의 정보 연결
            const li = btn.parentNode; // 현재 클릭한 버튼의 부모정보 -> 우리는 구조상 <li>내부에 <button>이 있으므로 부모<li>를 연결
            target.removeChild(li);
        }


        function callAppendChild(){
            var li = document.createElement('li'); // li라는 element를 생성함
            var keyword = document.getElementById("keyword").value;
            var addkeyword = document.createTextNode(keyword);
            const delBtn = document.createElement("button");

            if(keyword==""){
              alert("키워드를 입력하세요");
            }
            else{
              delBtn.innerText = "x";
              delBtn.addEventListener("click",deleteToDo);
              li.appendChild(addkeyword); // li 자식으로 = li 안에 text 추가
              li.appendChild(delBtn);
              target.appendChild(li);
            }
        };

