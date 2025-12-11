# schemas

Adding a schema to an existing namespace is relativelly hard.
It's easier instead to create a new namespace already defining a schema for it.

Example:

```JavaScript
db.createCollection("animals", {
    validator: { $jsonSchema: {
        bsonType: "object",
        required: ["name"],
        properties: {
            name: {
                bsonType: "string",
                description: "animal's name must be a string."
            },
            age: {
                bsonType: "string",
                description: "animal's age must be a string."
            }
        },
    }}
})
```

Notice how the "name" field is required, if we were to make the "age" field also required, we'd need
to add a new element in the required array.

Notice that the method createCollection accepts a second argument, which is an object that in this case
defines a jsonSchema.
