CREATE TABLE celebs (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE,
  date_of_birth TEXT NOT NULL,
  date_of_death TEXT DEFAULT 'Not Applicable'
);

INSERT INTO
  celebs (id, name, age)
VALUES
  (1, 'Justin Bieber', 22);

INSERT INTO
  celebs (id, name, age)
VALUES
  (2, 'Beyonce Knowles', 33);

INSERT INTO
  celebs (id, name, age)
VALUES
  (3, 'Jeremy Lin', 26);

INSERT INTO
  celebs (id, name, age)
VALUES
  (4, 'Taylor Swift', 26);

ALTER TABLE
  celebs
ADD
  COLUMN twitter_handle TEXT;

UPDATE
  celebs
SET
  twitter_handle = '@taylorswift13'
WHERE
  id = 4;

DELETE FROM
  celebs
WHERE
  twitter_handle IS NULL;

SELECT
  *
FROM
  celebs;