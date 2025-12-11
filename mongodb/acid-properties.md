# ACID properties

## About ACID complicance

ACID complicance is a set of properties that guarantee database transactions are processed reliably and
consistently.

- Atomicity: Transactions are treated as single units; either all operations within a transactions succeed, or none do.
- Consistency: Ensures that a transaction maintains data integrity and moves the database from one valid state to another.
- Isolation: Guarantees that concurrent transactions do not interfere with each other, making it seem as if they are processed sequentially.
- Durability: Ensures that once a transaction is committed, its change are permanent and will persist even if a system failure occurs.

Note that a transaction is a single, logical unit of work that groups togueter a sequence of operations
(like read, write, update or delete)
