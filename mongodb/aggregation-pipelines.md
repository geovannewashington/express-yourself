# Aggregation Pipelines

In MongoDB, the <\*.aggregate()> method is used to execute an aggregation pipeline.

## How it Works?

Documents pas through a series of stages. Each stage performs a specific operation on the input documents.
and the output of one stage becomes the input for the next, until the final result is produced.

Example:

```JavaScript
db.listingsAndReviews.aggregate([
    {
        $match: {
            number_of_reviews : { $gte: 100 }
        }
    },
    {
        $group: {
            _id : "$property_type",
            count : {$sum: 1},
            reviewCount : {$sum: "$number_of_reviews"},
        }
    }
]).sort({count: 1})
```

Note that in this array, each object is the so-called stage.
The `aggregate()` method accepts an array of pipeline stages which are processed in order.
Usually using a lot of filter in the form of `$<name>` (e.g.: $match, $group, $project)
