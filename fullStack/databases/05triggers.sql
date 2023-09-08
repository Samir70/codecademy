-- “a database trigger is procedural code that is automatically executed 
-- in response to certain events on a particular table or view in a database. 
-- The trigger is mostly used for maintaining
-- the integrity of the information on the database.”

CREATE OR REPLACE FUNCTION check_account_update() RETURNS TRIGGER AS $$
    BEGIN
        NEW.active:= 1;
        RETURN NEW;
    END;
$$ LANGUAGE PLPGSQL;

CREATE TRIGGER check_update
    BEFORE UPDATE ON accounts
    FOR EACH ROW
    EXECUTE PROCEDURE check_account_update();

-- So in this case, no matter what your UPDATE statement did to the accounts table, 
-- the modified rows would have their active column set to 1 
-- (presumably indicating true)

-- Can also use BEFORE INSERT, DELETE or TRUNCATE
-- AFTER INSERT, etc, will not let us modify the row being added/changed since
-- it only runs after the procedure is complete

CREATE TRIGGER after_trigger
    AFTER UPDATE ON customers
    FOR EACH ROW
    EXECUTE PROCEDURE log_customers_change();

-- When using FOR EACH ROW, 
-- the trigger will fire and call the function for every row 
-- that is impacted by the related query. 

-- The other option is to have it set to FOR EACH STATEMENT. 
-- FOR EACH STATEMENT calls the function in the trigger once for each query, 
-- not for each record.




-- with the WHEN clause, 
-- you can use NEW and OLD to get records from the table before and after the query. 
-- Logically, INSERT can not refer to OLD (nothing existed before the insert) and 
-- DELETE can not refer to NEW (nothing exists after the delete).

CREATE TRIGGER insert_trigger_high
BEFORE INSERT ON clients
FOR EACH ROW
WHEN (NEW.total_spent >= 1000)
EXECUTE PROCEDURE high_spender();



-- triggers run in alphabetical order
-- remove a trigger:
DROP TRIGGER insert_trigger ON customers;
-- list triggers:
SELECT * FROM information_schema.triggers;