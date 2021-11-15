const 
express = require('express'),
app = express(),
routes = require('./routes/routes')

app.use(express.json())
app.use(routes)
app.listen(3000)