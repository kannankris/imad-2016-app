console.log('Loaded!');

var button1 = document.getElementById('counter');

button1.onclick = function () {
    // create a request
    var request = new XMLHttpRequest(); 
    //capture the responce to a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var counter = request.responseText;
                var spinj = document.getElementById('count');
                spinj.innerHTML = counter.toString();
            }
        }
    };


// making the request
    request.open('GET', 'http://kannankris.imad.hasura-app.io/counter', true);
    request.send(null);



};


//submitting the name
var inpname = document.getElementById('iname');
var valname = inpname.value;
var submitbut = document.getElementById(subname);
submit.onclick = function(){
    
    
    var names = ['onnaman', 'randaman', 'moonaman'];
    var list = '';
    for (var i = 0; i < name.length; i++ ) {
        list = '<li>' + names[i] +'</li>';
    }
    var newlist = document.getElementById('namelist');
    newlist.innerHTML = list;
};