-- college is a database with lots of columns that are not to related
-- to the primary key (student_id)
-- counting majors is a tougher job
WITH majors AS(
  SELECT
    major_1 AS major
  FROM
    college
  UNION
  ALL
  SELECT
    major_2 AS major
  FROM
    college
  WHERE
    major_2 IS NOT NULL
)
SELECT
  major,
  count(*)
FROM
  majors
GROUP BY
  1
ORDER BY
  2 DESC;

-- every student with the same advisor 
-- has identical information recorded in all advisor-related columns 
-- in the college table -- making, eg, updating advisor email difficult
CREATE TABLE advisors AS
SELECT
  DISTINCT advisor_email as email,
  advisor_name as name,
  advisor_department as department
FROM
  college;

-- keep the advisor_email column, as this is needed as a foreign key
ALTER TABLE
  college DROP COLUMN advisor_name,
  DROP COLUMN advisor_department;

-- since student <-> majors is a many to many relationship, 
-- we need a cross-reference table to connect the data
CREATE TABLE majors AS
SELECT
  DISTINCT major_1 AS major_name,
  major_1_credits_reqd AS credits_reqd
FROM
  college;

CREATE TABLE students_majors AS
SELECT
  major_1 AS major,
  student_id
FROM
  college
UNION
ALL
SELECT
  major_2 AS major,
  student_id
FROM
  college
WHERE
  major_2 IS NOT NULL;

ALTER TABLE
  college DROP COLUMN major_1,
  DROP COLUMN major_1_credits_reqd,
  DROP COLUMN major_2,
  DROP COLUMN major_2_credits_reqd;