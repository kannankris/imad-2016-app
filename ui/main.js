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

var submitbut = document.getElementById('subname');
submitbut.onclick = function(){
    // create a request
    var request = new XMLHttpRequest(); 
    //capture the responce to a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i = 0; i < names.length; i++ ) {
                    list += '<li>' + names[i] +'</li>';
                }
                var newlist = document.getElementById('namelist');
                newlist.innerHTML = list;
            }
        }
    };


// making the request
    var inpname = document.getElementById('iname');
    var valname = inpname.value;
    request.open('GET', 'http://kannankris.imad.hasura-app.io/inputname?name=' + valname, true);
    request.send(null);

    
};