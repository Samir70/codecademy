CREATE TABLE friends (id integer, name text, birthday date);

INSERT INTO
  friends (id, name, birthday)
VALUES
  (1, 'Ororo Munroe', 'May 30th 1940');

INSERT INTO
  friends (id, name, birthday)
VALUES
  (2, 'Proro Munroe', 'May 30th 1940');

INSERT INTO
  friends (id, name, birthday)
VALUES
  (3, 'Qroro Munroe', 'May 30th 1940');

UPDATE
  friends
SET
  name = 'Storm'
WHERE
  name = 'Ororo Munroe';

ALTER TABLE
  friends
ADD
  COLUMN email TEXT;

UPDATE
  friends
SET
  email = 'storm@codecademy.com'
WHERE
  name = 'Storm';

DELETE FROM
  FRIENDS
WHERE
  name = 'Storm';

SELECT
  *
FROM
  friends;