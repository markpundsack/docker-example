var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
response.send('Hello World!')
})
app.get('/*', function(req, res){
    var path = req.params[0] ? req.params[0] : 'index.html';
    res.sendfile(path, {root: './public'});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
