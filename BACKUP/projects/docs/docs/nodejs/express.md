# Setup
## Env
```sh
touch app.js
npm init
# npm install express ejs --save
# npm install body-parser --save # if needed
# npm install method-override --save # if needed
# npm install mongoose --save # if needed

npm install express ejs body-parser method-override mongoose --save
npm install connect-flash --save
npm install passport passport-local passport-local-mongoose body-parser express-session ejs --save

mkdir views/partials
mkdir public
```
## app.js
```javascript
var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
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
app.use(bodyParser.urlencoded({extended: true}));
app.post("/post-req", function(req, res) {
	var data = req.body.data;
	res.redirect("/");
});
```

## Router
```javascript
// app.js
var indexRoutes = require("./routes/index");

app.use("/indexRoutes", indexRoutes);
```
```javascript
//index.js
var express  = require("express"),
    router   = express.Router({mergeParams: true}),

router.get("/", function(req, res) {
   res.render("index");
});

module.exports = router;
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

# Passport
## Schema
```javascript
var mongoose              = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
   username: String,
   password: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
```

## Setup
```sh
npm install express mongoose passport passport-local passport-local-mongoose body-parser express-session ejs --save
```
```javascript
var express               = require("express"),
    app                   = express(),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user");

mongoose.connect("mongodb://localhost:27017/db_name", {useNewUrlParser: true});
app.use(require("express-session")({
    secret: "secret_code",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```

## Sign Up
```javascript
app.get("/register", function(req, res) {
    res.render("register");
}) 

app.post("/register", function(req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/secret");
        });
    });
});
```

## Login
```javascript
app.get("/login", function(req, res) {
   res.render("login"); 
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret", 
    failureRedirect: "/login"
    
}), function(req, res) {
    
});
```

## Logout
```javascript
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});
```

## Secret Page
```javascript
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.get("/secret", isLoggedIn, function(req, res) {
   res.render("secret") ;
});
```

## Authorization
```javascript
// Is logged in
middlewareObj.isLoggedIn = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

// Ownership
middlewareObj.checkCommentOwnership = function(req, res, next) {
    if(req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, foundComment) {
            if(err) {
                res.redirect("back");
            } else {
                if(foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
}
```

## Form
```html
<form action="/login" method="POST">
    <input type="text" name="username" placeholder="username">
    <input type="password" name="password" placeholder="password">
    <button>Login</button>
</form>

<form action="/register" method="POST">
    <input type="text" name="username" placeholder="username">
    <input type="password" name="password" placeholder="password">
    <button>Sign Up!</button>
</form>
```
