SELECT
  title,
  score
FROM
  hacker_news
ORDER BY
  score DESC
LIMIT
  5;

-- below gives 6366
SELECT
  sum(score)
FROM
  hacker_news;

-- user 	        sum(score)
-- amirkhella 	  309
-- dmmalam 	    304
-- metafunctor 	282
-- vxNsr 	      517
SELECT
  user,
  sum(score)
FROM
  hacker_news
GROUP BY
  user
HAVING
  sum(score) > 200;

-- 353
SELECT
  (309 + 304 + 282 + 517) / 4;

-- finding rick rollers
-- user 	          count(*)
-- scorpiosister 	  1
-- sonnynomnom 	    2
SELECT
  user,
  count(*)
FROM
  hacker_news
WHERE
  url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
GROUP BY
  user;

-- count(*) 	Source
-- 3952 	      null
-- 23 	        GitHub
-- 12 	        Medium
-- 13 	        NYTimes
SELECT
  count(*),
  CASE
    WHEN url LIKE '%github.com%' THEN 'GitHub'
    WHEN url LIKE '%medium.com%' THEN 'Medium'
    WHEN url LIKE '%nytimes.com%' THEN 'NYTimes'
  END AS 'Source'
FROM
  hacker_news
GROUP BY
  source;

-- convert timestamp to hours:
SELECT
  timestamp,
  strftime('%H', timestamp)
FROM
  hacker_news
GROUP BY
  1
LIMIT
  20;

SELECT
  strftime('%H', timestamp),
  round(avg(score), 0),
  count(*)
FROM
  hacker_news
WHERE
  timestamp IS NOT NULL
GROUP BY
  1
LIMIT
  20;