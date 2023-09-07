-- people subscribed to newspaper in March:
SELECT
  count(*)
FROM
  newspaper
WHERE
  start_month <= 3
  AND end_month >= 3;

-- make a table where every row of newspaper gets matched to every row of months
SELECT
  *
FROM
  newspaper
  CROSS JOIN months;

-- only include rows where user is subscribed for that month:
SELECT
  *
FROM
  newspaper
  CROSS JOIN months
WHERE
  start_month <= MONTH
  AND end_month >= MONTH;

-- group by month
SELECT
  MONTH,
  count(*)
FROM
  newspaper
  CROSS JOIN months
WHERE
  start_month <= MONTH
  AND end_month >= MONTH
GROUP BY
  MONTH;