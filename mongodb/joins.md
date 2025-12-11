# Join ($lookup)

"Joins" in NoSQL databases (such as MongoDB) refer to a mechanism that emulate the relational join
functionality found in SQL, allowing data from different collections or tables to be combined.

## How to make joins in MongoDB?

In MongoDB, you can perform joins
using the $lookup aggregation stage within an aggregation pipeline. While MongoDB is a NoSQL,
document-oriented database, the $lookup operator provides a way to achieve a left outer join to combine documents from one collection with matching documents from another

## Using the `$lookup` operator

```JavaScript
{
  $lookup: {
    from: <collection_to_join_with>,
    localField: <field_from_the_input_documents>,
    foreignField: <field_from_the_"from"_collection>,
    as: <name_of_the_new_array_field_to_add>
  }
}
```

Example, given two collections:

`orders`:

```json
{ "_id": 1, "product_id": 100, "quantity": 2 }
{ "_id": 2, "product_id": 101, "quantity": 1 }
```

`products`:

```json
{ "_id": 100, "name": "Laptop", "price": 999.99 }
{ "_id": 101, "name": "Mouse", "price": 19.99 }
```

## Aggregation Query:

```JavaScript
db.orders.aggregate([
  {
    $lookup: {
      from: "products",         // Join with the "products" collection
      localField: "product_id", // Field from the orders collection
      foreignField: "_id",      // Field from the products collection
      as: "productInfo"         // New field name for the joined data
    }
  }
])
```

Result:

```json
{
  "_id": 1,
  "product_id": 100,
  "quantity": 2,
  "productInfo": [
    { "_id": 100, "name": "Laptop", "price": 999.99 }
  ]
}
{
  "_id": 2,
  "product_id": 101,
  "quantity": 1,
  "productInfo": [
    { "_id": 101, "name": "Mouse", "price": 19.99 }
  ]
}
```
