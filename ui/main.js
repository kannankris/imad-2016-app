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