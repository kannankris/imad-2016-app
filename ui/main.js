console.log('Loaded!');

var button1 = document.getElementById('counter');
var counter = 0;
button1.onclick = function () {
    // make a request to counter
    
    //capture the responce to a variable
    
    //render the variable to page
    counter = counter + 1;
    var spinj = document.getElementById('count');
    spinj.innerHTML = counter.toString();
};