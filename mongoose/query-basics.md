# Query Basics

Documents can be retrieved using a modal's find, findById, findOne, or where static functions.

Example:

```javascript
await Tank.find({ size: "small" }).where("createdDate").gt(oneYearAgo).exec();
```

Note that the `exec()` method is used to actually execute the query in the database.
But not needed when the code is wrapped in a function and we're calling that function.
