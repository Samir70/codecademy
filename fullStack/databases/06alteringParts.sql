ALTER TABLE
  parts
ADD
  UNIQUE (code);

UPDATE
  parts
SET
  description = 'no description available'
WHERE
  description IS NULL
  OR description = ' ';

ALTER TABLE
  parts
ALTER COLUMN
  description
SET
  NOT NULL;

SELECT
  *
FROM
  parts
ORDER BY
  id
LIMIT
  10;

-- insert into parts (id, code, manufacturer_id) values (54, 'V1-089', 9)
ALTER TABLE
  reorder_options
ALTER COLUMN
  price_usd
SET
  NOT NULL;

ALTER TABLE
  reorder_options
ALTER COLUMN
  quantity
SET
  NOT NULL;

ALTER TABLE
  reorder_options
ADD
  CHECK (
    price_usd > 0
    AND quantity > 0
    AND price_usd / quantity <= 25
  );

ALTER TABLE
  parts
ADD
  PRIMARY KEY (id);

ALTER TABLE
  reorder_options
ADD
  FOREIGN KEY (part_id) REFERENCES parts (id) ON DELETE CASCADE;

ALTER TABLE
  locations
ADD
  CHECK (qty > 0);

ALTER TABLE
  locations
ADD
  UNIQUE (part_id, location);

-- alter table locations add foreign key (part_id) references parts (id);
ALTER TABLE
  parts
ADD
  FOREIGN KEY (manufacturer_id) REFERENCES manufacturers (id);

-- select * from manufacturers;
INSERT INTO
  manufacturers
VALUES
  (11, 'Pip-NNC Industrial');

UPDATE
  parts
SET
  manufacturer_id = 11
WHERE
  manufacturer_id = 1
  OR manufacturer_id = 2;