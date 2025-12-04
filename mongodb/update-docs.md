# Update Docs

Example:

db.<collection_name>.update({name: "Alice"}, {$set: {name: "Bob"}})

## About MongoDB Operators:

operators are special keywords used in queries and updates to perform various operations on data within documents.
the formart of them is: $<name>

Using the .updateMany method we can set attribute to null:

db.<collection_name>.updateMany({name: "Bob"}, {$unset: {name: 1}})
sets the value of the 'Bob' key to null

note that null is a valid value in `JSON`.
