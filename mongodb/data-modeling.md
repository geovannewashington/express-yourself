# Data Modeling (linking vs embedding)

In data modeling, embedding stores related data togueter in one place (denormalized) for faster
reads and simpler code (like comments in a post).

while linking/referencing stores related adat separately and connects them with IDs (normalized)
for data consistency.

## About the choice

There are pros and cons for both. The choice depends on access patterns: embed for data frequently read togueter.
and link for loosely coupled data.
