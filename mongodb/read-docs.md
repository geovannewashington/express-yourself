# Reading Docs with the MongoDB CLI

We can filter a field in the mongodb CLI by using the following syntax:

We need to be on the namespace.
And then: <collection_name>.find(), if we don't provide a key, it will show us a default limited amount of
entries.

And if we specify a key, we will get the result...

db.<collection_name>.find({name: "tposeprogrammer"})

We can use the .limit method to specify a specific number of entries that should be shown.

`format`:
db.<collection_name>.find().limit(<number_of_files>)

The .filter() method can receive a second argument, which a config object, this way we can limit the amount
of entries from a document only to the fields we care about.

`format`:

db.<collection_name>.find({email: "tpose@dev.com"}, {\_id: false, password: false}).limit(<number_of_files>)

## Sorting:

We can also sort the output like the following:
db.<collection_name>.find({email: "tpose@dev.com"}, {\_id: false, password: false}).limit(<number_of_files>)
.sort({name: 1})

1 meaning ascendent order and -1 decrescent order.
