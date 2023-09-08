-- add a not null contraint to a column
ALTER TABLE
  talks
ALTER COLUMN
  title
SET
  NOT NULL;

-- if column already contains null values:
-- SQL Error [23502]: ERROR: column "title" contains null values
-- backfill
UPDATE
  talks
SET
  title = 'TBD'
WHERE
  title IS NULL;

-- re-run
ALTER TABLE
  talks
ALTER COLUMN
  title
SET
  NOT NULL;

-- remove a not null contraint:
ALTER TABLE
  talks
ALTER COLUMN
  session_timeslot DROP NOT NULL;

-- validating data:
-- can also put into create table
ALTER TABLE
  talks
ADD
  CHECK (
    estimated_length > 0
    AND estimated_length < 120
    AND date_part('year', session_timeslot) = 2020
  );

-- can ensure that no two rows have the same combination of two columns:
ALTER TABLE
  talks
ADD
  UNIQUE (speaker_id, session_timeslot);

-- primary key
ALTER TABLE
  attendees
ADD
  PRIMARY KEY (id);

-- foreign key
ALTER TABLE
  registrations
ADD
  FOREIGN KEY (talk_id) REFERENCES talks (id);

-- suppose we’d like to set up our database to automatically unregister 
-- attendees from a talk that’s been cancelled. 
-- To do this we could apply ON DELETE CASCADE to our foreign key constraint.
ALTER TABLE
  registrations
ADD
  FOREIGN KEY (talk_id) REFERENCES talks (id) ON DELETE CASCADE;

-- If following gets, say, 7 rows
SELECT
  *
FROM
  registrations
WHERE
  talk_id = 1;

-- After below the above search will get nothing, 
-- because those rows have been automatically deleted from registrations
DELETE FROM
  talks
WHERE
  id = 1;
