-- SELECT * FROM startups;
-- select count(*) from startups;
-- select sum(valuation) from startups;
-- select max(raised) from startups;
-- select max(raised) from startups where stage = 'Seed';
-- select min(founded) from startups;
-- select category, round(avg(valuation), 2) from startups group by category order by avg(valuation) desc;
-- select category, count(*) from startups group by category having count(*) > 3;
SELECT
  location,
  avg(employees)
FROM
  startups
GROUP BY
  location
HAVING
  avg(employees) > 500;