# Clusters and Replication

In mongodb, a cluster consists of three databases.

One `Primary`, and the other two which are copies/replicas
of the primary called `Secondaries`

Note that this concept is not exclusive to mongoDB, it's just how
databases work.

When it comes to writing, the write operation will first happen on the primary database and then
be copied to the others.

But when it comes to reading, we can read from any of the three, which speeds up things a lot.

Also the `replicas` also work as backup in case we need it.

Database clusters group multiple database instances to work as as single system.
