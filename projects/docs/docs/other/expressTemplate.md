# Express Template

## Install
```sh
touch app.js
npm init

npm install express ejs body-parser method-override mongoose --save
npm install passport passport-local passport-local-mongoose body-parser express-session ejs --save
npm install connect-flash --save
npm install moment --save

mkdir views views/partials views/partials/header.ejs views/partials/footer.ejs public public/stylesheets public/scripts models routes middleware
```

## app.js
```javascript
var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    flash          = require("connect-flash"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),

mongoose.connect("mongodb://localhost:port/db_name", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// passport config
app.use(require("express-session")({
	secret: "Add super secret code here",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// add the currentUser var to every route
app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	//app.locals.moment = require('moment'); // if needed
	next();
});

// add different route files
app.use(indexRoutes);
app.use("/path/:id/path2", idRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("The server has started");
});
```

## Routes module
```javascript
var express    = require("express"),
    router     = express.Router(),
    passport   = require("passport"),

router.get("/", function(req, res) {
   res.render("landing");
});

module.exports = router;
```

