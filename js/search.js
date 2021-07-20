const fillHearts = document.querySelectorAll('.hearts');

fillHearts.forEach(function(hearts){
  hearts.addEventListener("click",function(){
    hearts.classList.toggle('fas')
  });
})

function detailPersonProfile(){
    window.location.href = 'profile_person.html'
  };
function detailTeamProfile(){
  window.location.href = 'profile_team.html'
};
function detailClassTeamProfile(){
  window.location.href = 'profile_team2.html'
};