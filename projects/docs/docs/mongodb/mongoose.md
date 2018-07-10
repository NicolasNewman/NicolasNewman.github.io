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

});
var My = mongoose.model("My", mySchema);
```

# Create
```javascript
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
```
# Find
```javascript
My.find({}, function(err, my) {
  if(err) {
      console.log(err);
  } else {
      console.log(my);
  }
});
```
# Find by id
```javascript
My.findById(id, function(err, my) {

});
```

# Find by id and update
```javascript
My.findByIdAndUpdate(id, my, function(err, my) {

});
```