var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5001))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello guys this ejaz from devops team..')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
