var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
        'articleone' : {
            title : 'firstarticle',
            head1 : 'this page will be filled with wonders',
            head2 : 'page under development.do come back soon'
        },
        'articletwo' : {
            title : 'secondarticle',
            head1 : 'this page will be filled with secret doors to another world',
            head2 : 'page under development.do come back soon'
        },
        'articlethree' : {
            title : 'thirdarticle',
            head1 : 'this page will be filled with magcal spells',
            head2 : 'page under development.do come back soon'
        }
};


function htmlcreate(data){
    var title = data.title;
    var head1 = data.head1;
    var head2 = data.head2;
    
    var htmltemplate = `
        <html>
        
        
          <head>
              <title>${title}</title>
              <link href="/ui/style.css" rel="stylesheet" />
              <meta name="viewport" comment="width=device-width, initial-scale=1">
          </head>
          
          
          <body>
              <div>
                  <a href ='/'>home</a>
              </div>
              <hr/>
              
              <h1 class="center">${head1}</h1>
              <h4 class="center">${head2}</h4>
          
          </body>
    
    
        </html>
    
    `;
    return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req,res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/inputname', function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articlenumber', function (req,res) {
    var articlenumber = req.params.articlenumber;
  res.send(htmlcreate(articles[articlenumber]));
});

app.get('/ui/main.js', function (req,res) {
    res.sendfile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
