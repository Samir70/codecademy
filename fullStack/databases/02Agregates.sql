SELECT
  count(*)
FROM
  fake_apps
WHERE
  price <= 0;

SELECT
  sum(downloads)
FROM
  fake_apps;

SELECT
  name,
  max(price)
FROM
  fake_apps;

-- returns just the row with max price
SELECT
  round(AVG(price), 2)
FROM
  fake_apps;

-- The GROUP BY statement comes after any WHERE statements, 
-- but before ORDER BY or LIMIT.
SELECT
  category,
  sum(downloads)
FROM
  fake_apps
GROUP BY
  category;

SELECT
  price,
  COUNT(*)
FROM
  fake_apps
WHERE
  downloads > 20000
GROUP BY
  price;

SELECT
  category,
  price,
  AVG(downloads)
FROM
  fake_apps
GROUP BY
  1,
  2;

-- category and price
-- HAVING statement always comes after GROUP BY, but before ORDER BY and LIMIT.
SELECT
  price,
  ROUND(AVG(downloads)),
  COUNT(*)
FROM
  fake_apps
GROUP BY
  price
HAVING
  count(*) > 10;