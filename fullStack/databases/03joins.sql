SELECT
  *
FROM
  orders
  JOIN customers ON orders.customer_id = customers.customer_id;

-- count how many are in both tables:
SELECT
  count(*)
FROM
  newspaper;

SELECT
  count(*)
FROM
  online;

SELECT
  count(*)
FROM
  newspaper
  JOIN online ON newspaper.id = online.id;

-- What if we want to combine two tables and keep some of the un-matched rows?
-- A 1 || 1 x
-- B 2 || 5
-- C 3 || 3 y
-- ==> 
-- A 1 x
-- B 2 
-- C 3 y
SELECT
  *
FROM
  newspaper
  LEFT JOIN online ON newspaper.id = online.id;

-- some columns will have null because they are in the first table,
-- but not in the second
-- find out how many:
SELECT
  count(*)
FROM
  newspaper
  LEFT JOIN online ON newspaper.id = online.id
WHERE
  online.id IS NULL;