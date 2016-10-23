var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1 ={
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
           </p>
            `
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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article-1', function (req, res) {
  //res.sendFile(path.join(__dirname,'ui','article-1.html'));
  res.send(createHTML(article1));
    
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
