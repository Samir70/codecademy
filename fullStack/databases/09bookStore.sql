-- improve query time from 11.5ms to 3.3ms
EXPLAIN ANALYZE
SELECT
  customer_id,
  quantity
FROM
  orders
WHERE
  quantity > 18;

CREATE INDEX orders_big_quantity_idx ON orders (customer_id)
WHERE
  (quantity > 18);

EXPLAIN ANALYZE
SELECT
  customer_id,
  quantity
FROM
  orders
WHERE
  quantity > 18;

-- lower execution time to 0.061ms from 15.9ms
EXPLAIN ANALYZE
SELECT
  customer_id
FROM
  customers
WHERE
  customer_id = 5;

ALTER TABLE
  customers
ADD
  PRIMARY KEY (customer_id);

EXPLAIN ANALYZE
SELECT
  customer_id
FROM
  customers
WHERE
  customer_id = 5;

-- with the key created above (via alter table to make primary key)
-- we can cluster to make queries sorted by id
SELECT
  *
FROM
  customers
LIMIT
  10;

cluster customers USING customers_pkey;

SELECT
  *
FROM
  customers
LIMIT
  10;

-- speed up search for big orders
EXPLAIN ANALYZE
SELECT
  *
FROM
  orders
WHERE
  quantity * price_base > 100;

CREATE INDEX orders_big_buys_idx ON orders (quantity, price_base)
WHERE
  (quantity * price_base > 100);

EXPLAIN ANALYZE
SELECT
  *
FROM
  orders
WHERE
  quantity * price_base > 100;