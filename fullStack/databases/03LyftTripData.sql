-- SELECT * FROM trips join riders where trips.rider_id = riders.id; 
-- SELECT * FROM trips join cars where trips.car_id = cars.id; 
-- select * from riders union select * from riders2;
-- select avg(cost) from trips;
-- select count(*) from riders where total_trips < 500;
-- select count(*) from cars where status = 'active';
SELECT
  *
FROM
  cars
ORDER BY
  trips_completed DESC
LIMIT
  2;