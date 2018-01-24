
document.addEventListener('DOMContentLoaded', function() {



var getTies = function(){

    var element = document.createElement("div");
    var text = document.createTextNode("Here are my Ties");
    element.appendChild(text);

    return document.getElementById('ties').appendChild(element);

}
window.onload=getTies();


}, false);
