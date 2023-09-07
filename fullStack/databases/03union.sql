-- SQL has strict rules for appending data:
-- Tables must have the same number of columns.
-- The columns must have the same data types in the same order as the first table.
SELECT
  *
FROM
  newspaper
UNION
SELECT
  *
FROM
  online;