window.onload = function(){
    var text = document.querySelector(".bottom");
    text.addEventListener('mouseover', function(){
        text.classList.add("animated");
    });
    text.addEventListener('mouseout', function(){
        text.classList.remove("animated");
    });
    
    var links = document.querySelectorAll("a");
    var border = document.querySelector("#box");
    for(var x = 0; x < links.length; x++){
        links[x].addEventListener('mouseover', function(){
            border.classList.add("wave");
        });
        
        links[x].addEventListener('mouseout', function(){
            border.classList.remove("wave");
        });
    }
    
}