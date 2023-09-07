CREATE TABLE person (
  id integer PRIMARY KEY,
  name varchar(20),
  age integer
);

CREATE TABLE email (
  email varchar(20) PRIMARY KEY,
  person_id integer REFERENCES person(id),
  STORAGE integer,
  price money
);

-- unique, there should not be two licenses with the same license_id 
CREATE TABLE driver (
    license_id char(20) PRIMARY KEY,
    name varchar(20),
    address varchar(100),
    date_of_birth date
);      

CREATE TABLE license (
    id integer PRIMARY KEY,
    state_issued varchar(20),
    date_issued date,
    date_expired  date,
    license_id char(20) REFERENCES driver(license_id) UNIQUE
); 