var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    article1:{
                title:"Article-1|KK",
                heading:"Article One",
                date:"Oct 24 2016",
                content:`
                       <p>
                          Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.
                       </p>
                       <p>
                          Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.
                       </p>
                       <p>
                          Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.
                       </p>`
                },
    article2:{
                title:"Article-2|KK",
                heading:"Article Two",
                date:"Oct 22 2016",
                content:`
                       <p>
                          Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.
                       </p>
                       <p>
                          Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.
                       </p>
                       <p>
                          Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.
                       </p>`
                },
    article3:{
                title:"Article-3|KK",
                heading:"Article Three",
                date:"Oct 23 2016",
                content:`
                       <p>
                          Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.
                       </p>
                       <p>
                          Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.
                       </p>
                       <p>
                          Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.Article one.
                       </p>`
                }
};
function createHTML(data){
    var htmlTemplate = `
                        <html>
                         <head>
                           <title>${data.title}</title>
                           <meta name="viewport" content="width-device-width" initial-scale="1">
                           <link href="/ui/style.css" rel="stylesheet" />
                           
                         </head>
                         <body>
                          <div class = "container">
                          <a href="/">Home</a>
                          <hr>
                          <div><h1>${data.heading}</h1></div>
                          <br>      
                          <div>${data.date}</div>
                          <br>
                          <div>
                           ${data.content}
                           </div>
                          </div>
                         </body>
                        </html>

                        `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
/*
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});*/
var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter +1;    
  res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
  //res.sendFile(path.join(__dirname,'ui','article-1.html'));
  var articleName= req.params.articleName;
  res.send(createHTML(articles[articleName]));
    
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
