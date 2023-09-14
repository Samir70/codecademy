SELECT
  *
FROM
  pg_Indexes
WHERE
  tablename = 'products';

EXPLAIN ANALYZE
SELECT
  *
FROM
  customers
WHERE
  first_name = 'David';

-- creating an index
-- nb: this will have an impact on update times involving the city column and
-- cost more memory (it makes a binary tree to improve search time)
CREATE INDEX customers_city_idx ON customers (city);

-- See if an index exists
SELECT
  *
FROM
  pg_Indexes
WHERE
  tablename = 'customers';

-- drop an index, if it exists
DROP INDEX IF EXISTS customers_city_idx;

-- compound indexes
-- so the search for 'John Smith' is expected to be faster
CREATE INDEX customers_last_name_first_name_idx ON customers (last_name, first_name);

-- check size of table
SELECT
  pg_size_pretty (pg_total_relation_size('customers'));

-- consider types of queries are going to be common in a database
-- finding 1 in a million -> indexing helps
-- finding 900000 in a million -> indexing won't help
-- queries involving an colA or colB 
-- where only one of A and B is indexed will be at tempo of unindexed
CREATE INDEX customers_idx ON customers (last_name);

-- fast
EXPLAIN ANALYZE VERBOSE
SELECT
  *
FROM
  customers
WHERE
  last_name = 'Jones'
  AND first_name = 'David';

--  slow
EXPLAIN ANALYZE VERBOSE
SELECT
  *
FROM
  customers
WHERE
  last_name = 'Jones'
  OR first_name = 'David';