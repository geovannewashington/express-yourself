# Delete Docs

We can delete a document, by mentioning one of it's key using the `deleteOne` method:

syntax:

db.<collection_name>.deleteOne({name: "alice"})
Deletes the first document that contains a field `name` with value `alice`

`deleteMany` works in a similar way but it will delete all instances found...

syntax:

db.<collection_name>.deleteMany({name: "alice"})
Deletes all instances of documents containing the 'name' key with the value 'alice'
