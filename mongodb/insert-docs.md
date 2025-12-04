# Insert Docs

We can add a field using either .insertOne or .insertMany:

e.g.:
db.<collection_name>.insertOne({email: johndoe@email.com})

We can also create multiple fields at once with the .insertMany method:

e.g.:
db.<collection_name>.insertMany([{email: alice@email.com}, {email: johndoe@email.com}])

## Another way of finding:

e.g.:
db.<collection_name>.find({email: { $in: ["alice@email.com, johndoe@email.com"]}})
