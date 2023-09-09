-- commands for 
-- > psql -U postgres
SELECT
  current_user;

-- postgres
-- this is a superuser, with all possible permissions
-- principle of least privilege
-- users should have only the minimum permissions required for their function.
-- superusers should not be doing routine tasks.
SELECT
  rolname
FROM
  pg_catalog.pg_roles;

SELECT
  grantor,
  grantee,
  table_schema,
  table_name,
  privilege_type
FROM
  information_schema.table_privileges
WHERE
  grantee = 'postgres'
LIMIT
  10;

-- SET  role < rolename >;
-- as a superuser you should be able to:
-- CREATE ROLE <name> WITH <list of permissions>;
CREATE ROLE sampleusr WITH NOSUPERUSER LOGIN;

ALTER ROLE miriam WITH CREATEDB;

SELECT
  grantee,
  table_name,
  privilege_type
FROM
  information_schema.table_privileges
WHERE
  grantee = 'analyst';

-- granting USAGE on the schema. 
-- In this example, analyst is also granted the ability to 
-- CREATE new tables in the schema.
GRANT USAGE,
CREATE ON SCHEMA finance TO analyst;

-- granting the table specific permissions.
GRANT
SELECT
,
UPDATE
  ON finance.revenue TO analyst;

-- undo
REVOKE
UPDATE
  ON finance.revenue
FROM
  analyst;

-- grant access by default to all new tables:
GRANT USAGE ON finance TO analyst;

GRANT
SELECT
  ON ALL TABLES IN finance TO analyst;

ALTER DEFAULT PRIVILEGES IN SCHEMA finance GRANT
SELECT
  ON TABLES TO analyst;

-- alice, bob, and charlie can each be login roles, 
-- and they can also all be members of a group role called employees
-- inheriting permissions from the employees group
CREATE ROLE employees WITH NOLOGIN ROLE alice,
bob,
charlie;

-- or
CREATE ROLE pgdba WITH NOLOGIN SUPERUSER CREATEDB;

CREATE ROLE david WITH LOGIN IN ROLE pgdba,
employees;

-- check:
SELECT
  rolname,
  rolsuper
FROM
  pg_catalog.pg_roles
WHERE
  rolname = 'david';

-- or add new role to existing group
CREATE ROLE fran WITH LOGIN IN ROLE employees,
managers;

-- fine-grained permissions, by column
GRANT
SELECT
  (project_code, project_name, project_status) ON projects TO employees;

-- sim
GRANT
UPDATE
  (project_name, project_status) ON projects TO manager;

-- row level permissions
-- set so that the value in the salesperson column must be equal to current_user
CREATE POLICY emp_rls_policy ON accounts FOR
SELECT
  TO sales USING (salesperson = current_user);

-- enable
-- they’d see only the row(s) where they’re listed as the salesperson.
-- With RLS enabled, if bob were to SELECT * from accounts, 
ALTER TABLE
  accounts ENABLE ROW LEVEL SECURITY;
