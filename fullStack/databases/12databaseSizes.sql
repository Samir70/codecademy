SELECT
  pg_size_pretty(pg_table_size('mock.house_prices')) AS tbl_size,
  pg_size_pretty(pg_indexes_size('mock.house_prices')) AS idx_size,
  pg_size_pretty(pg_total_relation_size('mock.house_prices')) AS total_size;

-- Each row in a PostgreSQL table is stored 
-- in a file on the disk of the host machine. 
-- When an UPDATE or DELETE is called, 
-- PostgreSQL doesn’t physically delete the content from the disk. 
-- Instead, the database engine marks those rows so that they aren’t 
-- returned in user queries. 
-- These rows are called dead tuples, and 
-- although they aren’t referenced in the current version of databases’ tables, 
-- they still occupy space on disk and can affect performance.
-- 
-- Update marks a row as invalid and writes a new file for that row
-- Searches eventually have to go through lots of rows marked invalid
-- 
-- reclaim space by setting it as available for overwriting:
VACUUM mock.house_prices;

-- can use vacuum full, but this takes longer and blocks other operations
VACUUM FULL mock.house_prices;

-- see history
SELECT
  relname,
  last_vacuum,
  last_autovacuum,
  last_analyze
FROM
  pg_stat_all_tables
WHERE
  relname = 'books';

-- checking database dead tuples:
-- nb: delete may trigger autovacuum, so there will be no dead tuples
DELETE FROM
  mock.stock_prices
WHERE
  day_id = 5
  OR day_id = 6;

ANALYZE mock.stock_prices;

SELECT
  schemaname,
  relname,
  n_dead_tup,
  n_live_tup
FROM
  pg_stat_all_tables
WHERE
  schemaname = 'mock';

-- truncate is faster than a complete delete (eg: with no where clause)
-- it also immediately reclaims space
TRUNCATE books;