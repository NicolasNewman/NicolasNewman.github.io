# Commands
```
mongo
show dbs
use <db> // Created if it doesn't exist
db.<collection>.insert({param: "val", param2: "val2"})
show collections

db.<collection>.find() // returns everything
db.<collection>.find({name: "Jim"})

db.<collection>.update({age: 16}, {canDrive: true}) // Overrides everything
db.<collection>.update({age: 16}, {$set: {age: 21, canDrink: "rue}})

db.<collection>.remove({age: 16})
```