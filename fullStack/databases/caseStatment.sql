SELECT
  name,
  CASE
    WHEN genre = 'romance' THEN 'Chill'
    WHEN genre = 'comedy' THEN 'Chill'
    ELSE 'intense'
  END AS 'Mood'
FROM
  movies;