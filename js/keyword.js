const keywordForm = document.querySelector(".keyword-form");
const keywordInput = document.querySelector("#keyword");
const newKeywordList = document.querySelector("#new-keyword-list");

function deleteKeyword(event){
    const keyword = event.target.parentElement;
    keyword.remove();
}

function printNewKeywords(event){
  event.preventDefault();
  const newKeyword = keywordInput.value;
  const li = document.createElement("li");
  li.innerText = newKeyword;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteKeyword);
  li.appendChild(button);
  newKeywordList.appendChild(li);
  keywordInput.value = "";
}

keywordForm.addEventListener("submit", printNewKeywords);