-- index only employess at Wells Fargo
CREATE INDEX users_user_name_internal_idx ON users (user_name)
WHERE
  email_address LIKE '%@wellsfargo.com';

-- index of teenager customers:
CREATE INDEX customers_years_old_teen_idx ON customers (years_old)
WHERE
  years_old BETWEEN 13
  AND 19;

-- ..
-- improve queries that use ordering
SELECT
  user_name,
  date_time
FROM
  logins
WHERE
  date_time >= (NOW() - INTERVAL '1 month')
ORDER BY
  date_time DESC;

-- By default, PostgreSQL orders indexes by ascending order with NULLs last.
-- so do nothing if that is the desired order
CREATE INDEX logins_date_time_idx ON logins (date_time DESC, user_name);

-- clustered indexes
-- data is arranged in the table according to a sorting rule
-- A clustered index functions as a dictionary. 
-- You can think of all other indexes (non-clustered) 
-- more akin to an index in a book.
-- 
-- PostgreSQL does not automatically recluster 
-- on INSERT, UPDATE and DELETE statements. 
-- So those statements might run faster than equivalent statements 
-- using a different system. 
-- The flip side of this coin though is that after time, 
-- the more your table is modified the less useful the 
-- cluster will be on your searches.
-- ..
-- To cluster your database table using an existing index 
-- (say products_product_name_idx) on the products table you would use:
CLUSTER products USING products_product_name_idx;

-- If you have already established what index should be clustered on 
-- you can simply tell the system which table to apply the cluster on.
CLUSTER products;

-- And if you want to cluster every table in your database that has 
-- an identified index to use you can simply call
CLUSTER;

-- 
-- 
-- 
-- 
-- Because the index you created is on the state_name and 
-- that is how you are filtering your data 
-- the information obtained from the index is the state_name. 
-- For the last_name the system goes back to the main table using 
-- the pointer with each record it finds to get the last_name 
-- it then sorts this data and presents the information.
CREATE INDEX customers_state_name_idx ON customers (state_name);

SELECT
  last_name,
  state_name
FROM
  customers
WHERE
  state_name = 'Texas'
ORDER BY
  last_name;

-- improve search time with a compound index
-- no longer has to go back to main table to get email_address
CREATE INDEX customers_last_name_first_name_email_address_idx ON customers (last_name, first_name, email_address);

SELECT
  first_name,
  last_name,
  email_address
FROM
  customers
WHERE
  last_name = 'Smith';