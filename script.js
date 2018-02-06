var button = document.getElementById("button");
var search = document.getElementsByClassName("search-container")[0];
var section = document.getElementsByTagName("section")[0];
var title = document.getElementsByTagName("h5")[0];

button.addEventListener('click', function(){
    section.classList.add('display');
    search.classList.add('hide');
    title.classList.add('hide');
});