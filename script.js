var button = document.getElementById("button");
var search = document.getElementsByClassName("search-container")[0];
var searchContent =  document.getElementsByClassName("search")[0];
var section = document.getElementsByTagName("section")[0];
var title = document.getElementsByTagName("h5")[0];
var image = document.querySelector(".image");
var searchText = document.querySelector('.search-text');
var parentNode = $('.card-columns'); 

image.style.display = 'none';

var entry = '';
button.addEventListener('click', function () {  
    if(searchText.value.length <= 0){
        searchText.classList.add('search-text-danger');
        button.classList.add("search-text-danger");
        return false;
    }  
    searchText.classList.remove('search-text-danger');
    searchContent.classList.remove('position');
    parentNode.empty();
    entry = $('#searchinput').val();
    image.style.display = 'inline-block';

    fetchEntries(entry);
});

function fetchEntries(entry) {
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + entry,
        data: "data",
        dataType: "jsonp",
        success:success,
        error:error
    });    
}

var success =  function(response) {    
    image.style.display = 'inline-block';
    section.classList.add('display');
    image.style.display = 'none';
    // title.classList.add('hide');
    transformData(response);
    return response;
};

var error =  function(error) {
    image.style.display = 'none';
    return error;
};

function transformData(data){
    if (data.length > 0) {       
        for (var index = 0; index < data[1].length; index++) {
            var html = '';
            if(data[2][index].length > 0){
                console.log(data[1][index] );
                html+= '<div class="card bg-light text-dark">' + 
                '<div class="card-header"><h1><a href="' + data[3][index] + '" target="_blank">' + data[1][index] + '</a></h1></div>' + 
               '<div class="card-body">' + 
                  '<p class="card-text">' +   data[2][index] + '</p></div></div>'; 
            }           

            parentNode.append(html);

        }
              
    }
}













