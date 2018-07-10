# Setup
## Env
```sh
touch app.js
npm init
npm install express ejs --save
npm install body-parser --save # if needed
npm install method-override --save # if needed
mkdir views/partials
mkdir public
```
## app.js
```javascript
var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.get("/", function(req, res) {
    res.send("Hello there!");
});

app.listen(port, ip, function() {
    console.log("Server has started")
});
```
## views/partials/header.ejs
```html
<!-- include with <% include partials/header %> -->
<!DOCTYPE html>
<html>
    <head>
        <title>To-Do List</title>
        <link type="text/css" rel="stylesheet" href="/style.css">
    </head>
    <body>
```

# Routes
## Wildcard
```javascript
// Must go last!
app.get("*", function(req, res) {
	res.send("Not a valid route");
});
```
## Get params
```javascript
app.get("/home/:data", function(req, res) {
	var data = req.params.data;
});
```
## Post
```html
<form action="/post-req" method="POST">
    <input type="text" name="data" placeholder="data">
    <button>Submit</button>
</form>
```
```javascript
app.post("/post-req", function(req, res) {
	var data = req.body.data;
	res.redirect("/");
});
```

# EJS
## If logic
```javascript
<% if(true) { %>
	<p>True</p>
<% } else { %>
	<p>False</p>
<% } %>
```

## Passing information
```javascript
// app.js
var data = [1, 2, 3, 4, 5];
app.get("/", function(req, res) {
	res.render("index.ejs", {data: data});
});
```
```html
<!-- index.ejs -->
<p><%= data %></p>
```
