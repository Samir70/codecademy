SELECT
  current_user;

SELECT
  *
FROM
  pg_catalog.pg_roles;

CREATE role abc_open_data WITH nosuperuser login;

SELECT
  *
FROM
  pg_catalog.pg_roles;

CREATE role publishers WITH nosuperuser role abc_open_data;

GRANT USAGE,
CREATE ON schema analytics TO publishers;

GRANT
SELECT
  ON ALL TABLES IN schema analytics TO publishers;

SELECT
  *
FROM
  information_schema.table_privileges
WHERE
  privilege_type = 'SELECT'
  AND table_schema = 'analytics';

SET
  role abc_open_data;

SELECT
  *
FROM
  analytics.downloads
LIMIT
  10;

SET
  role ccuser;

SELECT
  *
FROM
  directory.datasets
LIMIT
  10;

GRANT USAGE,
CREATE ON schema directory TO publishers;

GRANT
SELECT
  (
    id,
    create_date,
    hosting_path,
    publisher,
    src_size
  ) ON ALL TABLES IN schema directory TO publishers;

SET
  role abc_open_data;

-- SELECT id, publisher, hosting_path, data_checksum FROM directory.datasets;
SELECT
  id,
  publisher,
  hosting_path
FROM
  directory.datasets
LIMIT
  10;

SET
  role ccuser;

CREATE POLICY pubs_policy ON analytics.downloads FOR
SELECT
  TO publishers USING (owner = current_user);

ALTER TABLE
  analytics.downloads ENABLE ROW LEVEL SECURITY;

SELECT
  *
FROM
  analytics.downloads
LIMIT
  10;

SET
  role abc_open_data;

SELECT
  *
FROM
  analytics.downloads
LIMIT
  10;

SET
  role ccuser;