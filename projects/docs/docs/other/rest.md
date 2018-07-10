
# RESTful Routes
| Name    | Path           | HTTP Verb | Purpose                                          | Mongoose Method         |
|---------|----------------|-----------|--------------------------------------------------|-------------------------|
| Index   | /dogs          | GET       | List all dogs     								  | Dog.find()              |
| New     | /dogs/new      | GET       | Show new dog form 								  | N/A                     |
| Create  | /dogs          | POST      | Create a new dog, then redirect somewhere        | Dog.create()            |
| Show    | /dogs/:id      | GET       | Show info about one specific dog                 | Dog.findById()          |
| Edit    | /dogs/:id/edit | GET       | Show edit form for one dog                       | Dog.findById()          |
| Update  | /dogs/:id      | PUT       | Update a particular dog, then redirect somewhere | Dog.findByIdAndUpdate() |
| Destroy | /dogs/:id      | DELETE    | Delete a particular dog, then redirect somewhere | Dog.findByIdAndRemove() |

# Example

## Index
```javascript
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
       if(err) {
           console.log(err);
       } else {
           res.render("index", {blogs: blogs});
       }
    });
});
```
## New
```javascript
app.get("/blogs/new", function(req, res) {
   res.render("new"); 
});
```
## Create
```javascript
app.post("/blogs", function(req, res) {
   Blog.create(req.body.blog, function(err, newBlog) {
       if(err) {
           res.render("new");
       } else {
           res.redirect("/blogs");
       }
   }); 
});
```
## Show
```javascript
app.get("/blogs/:id", function(req, res) {
   Blog.findById(req.params.id, function(err, foundBlog) {
      if(err) {
          res.redirect("/blogs");
      } else {
          res.render("show", {blog: foundBlog});
      } 
   });
});
```
## Edit
```javascript
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs")
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
}); 
```
## Update
```javascript
// action="/blogs/<%= blog._id %>?_method=PUT" method="POST"
app.put("/blogs/:id", function(req, res) {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
       if(err) {
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs/" + req.params.id);
       }
    });
});
```

## Destroy
```javascript
// action="/blogs/<%= blog._id %>?_method=DELETE" method="POST"
app.delete("/blogs/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
       if(err) {
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs");
       }
    });
});
```