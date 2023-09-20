SELECT
  pg_size_pretty(pg_table_size('sensors.observations')) AS tbl_size,
  pg_size_pretty(pg_indexes_size('sensors.observations')) AS idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) AS total_size;

SELECT
  pg_size_pretty(
    pg_total_relation_size('sensors.observations_pkey')
  ) AS idx_1_size,
  pg_size_pretty(
    pg_total_relation_size('sensors.observations_location_id_datetime_idx')
  ) AS idx_2_size;

UPDATE
  sensors.observations
SET
  distance = distance * 3.281;

vacuum sensors.observations;

\ COPY sensors.observations (
  id,
  datetime,
  location_id,
  duration,
  distance,
  category
)
FROM
  './additional_obs_types.csv' WITH DELIMITER ',' CSV HEADER;

vacuum FULL sensors.observations;

DELETE FROM
  sensors.observations
WHERE
  location_id > 24;

TRUNCATE sensors.observations;

SELECT
  pg_size_pretty(pg_table_size('sensors.observations')) AS tbl_size,
  pg_size_pretty(pg_indexes_size('sensors.observations')) AS idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) AS total_size;

SELECT
  pg_size_pretty(
    pg_total_relation_size('sensors.observations_pkey')
  ) AS idx_1_size,
  pg_size_pretty(
    pg_total_relation_size('sensors.observations_location_id_datetime_idx')
  ) AS idx_2_size;