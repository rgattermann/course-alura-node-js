var app = require('./config/express')();
var routes = require('./app/routes/products')(app);

app.listen(3000, function() {
    console.log("It's alive!");
});