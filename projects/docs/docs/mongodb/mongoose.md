# Setup with node.js
```sh
npm install mongoose --save
```
```javascript
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:port/db_name", {useNewUrlParser: true});

var mySchema = new mongoose.Schema({ 
    name: String,
    age: Number,
    canDrive: Boolean,
    comments: [{body: String, data: Date}]
    created: {type: Date, default: Date.now}

});
var My = mongoose.model("My", mySchema);
```

# Basics
## Create
```javascript
// Example One
My.create({
    name: "Bob",
    age: 15,
    canDrive: true
}, function(err, my) {
    if(err) {
        console.log(err);
    } else {
        console.log(my);
    }
});

// Example Two
var name = req.body.name;
var image = req.body.image;
var description = req.body.description;
var author = {
    id: req.user._id,
    username: req.user.username
};

var newCampground = {name: name, image: image, description: description, author: author};
Campground.create(newCampground, function(err, newSite) {
if(err) {
    console.log("Error");
} else {
    res.redirect("/");
}
```
## Find
```javascript
My.find({}, function(err, my) {
  if(err) {
      console.log(err);
  } else {
      console.log(my);
  }
});
```
## Find by id
```javascript
My.findById(id, function(err, my) {

});
```

## Find by id and update
```javascript
My.findByIdAndUpdate(id, my, function(err, my) {

});
```

## Delete by id
```javascript
My.findByIdAndRemove(id, function(err, my) {

});
```

# Associations

## Embed
```javascript
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


var newUser = new User({
  email: "email",
  name: "name"
});
newUser.posts.push({
  title: "title",
  content: "content"
})
```

## Reference
```javascript
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    name: String,
    description: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User" // defined elsewhere
        },
        username: String
    }

});
var User = mongoose.model("User", userSchema);
```