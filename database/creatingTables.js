import pool from './dbConnection';

const DatabaseTables = pool.query(
  ` 
  DROP TABLE IF EXISTS user_profile;
  DROP TABLE IF EXISTS users;
  DROP TABLE IF EXISTS sub_category;
  DROP TABLE IF EXISTS category;
  DROP TABLE IF EXISTS advert_type;
  DROP TABLE IF EXISTS car_details;
  DROP TABLE IF EXISTS land_details;
  DROP TABLE IF EXISTS realest_details;
  DROP TABLE IF EXISTS properties;
  DROP TABLE IF EXISTS realestate_requests;
  DROP TABLE IF EXISTS vehicle_requests;
CREATE TABLE users(
  user_id BIGSERIAL PRIMARY KEY,
  firstname VARCHAR(200) NOT null,
  lastname VARCHAR(50) NOT null,
  email VARCHAR(150) NOT null unique,
  password VARCHAR(150) NOT null,
  phone VARCHAR(50) NOT null unique,
  isAdmin boolean,
  createdAt timestamp,
  status boolean
);
CREATE TABLE user_profile(
  user_prof_id BIGSERIAL PRIMARY KEY,
  user_id INTEGER,
  Phone_nbr2 VARCHAR(50),
  country VARCHAR(50),
  city VARCHAR(100),
  district VARCHAR(100), 
  sector VARCHAR(150),
  bio TEXT 
);
CREATE TABLE category(
  categ_id BIGSERIAL PRIMARY KEY,
  categ_name VARCHAR(50) NOT null,
  createdAt timestamp,
  status boolean,
  user_id BIGSERIAL
);
CREATE TABLE sub_category(
  sub_categ_id BIGSERIAL PRIMARY KEY,
  sub_categ_name VARCHAR(50) NOT null,
  user_id INTEGER,
  categ_id INTEGER,
  createdAt timestamp,
  status boolean
);
CREATE TABLE advert_type(
  advert_type_id BIGSERIAL PRIMARY KEY,
  advert_type_name VARCHAR(50) NOT null,
  user_id INTEGER,
  createdAt timestamp,
  status boolean
);
CREATE TABLE properties(
  property_id BIGSERIAL PRIMARY KEY,
  title TEXT NOT null,
  description TEXT NOT null,
  main_image VARCHAR(200) NOT null,
  advert_type_id INTEGER,
  sub_categ_id INTEGER,
  createdAt timestamp NOT null,
  expiredAt timestamp NOT null,
  status boolean
);
CREATE TABLE realestate_requests(
  pro_req_id BIGSERIAL PRIMARY KEY,
  advert_type_id INTEGER,
  sub_categ_id INTEGER,
  description TEXT NOT null,
  neighborhood TEXT,
  currency VARCHAR(50) NOT null,
  min_amount money NOT null,
  max_amount money NOT null,
  time_need VARCHAR(50) NOT null,
  bedroom INTEGER,
  bathroom INTEGER,
  country VARCHAR(100) NOT null,
  city VARCHAR(100) NOT null,
  firstname VARCHAR(50) NOT null,
  lastname VARCHAR(50) NOT null,
  email  VARCHAR(100),
  phone_nbr VARCHAR(50) NOT null,
  createdAt timestamp NOT null,
  expiredDate timestamp NOT null,
  status boolean
);
CREATE TABLE vehicle_requests(
  veh_req_id BIGSERIAL PRIMARY KEY,
  advert_type_id INTEGER,
  sub_categ_id INTEGER,
  description TEXT NOT null,
  currency VARCHAR(50) NOT null,
  min_amount money NOT null,
  max_amount money NOT null,
  time_need VARCHAR(50) NOT null,
  firstname VARCHAR(50) NOT null,
  lastname VARCHAR(50) NOT null,
  email  VARCHAR(100),
  phone_nbr VARCHAR(50) NOT null,
  createdAt timestamp NOT null,
  expiredDate timestamp NOT null,
  status boolean
);
CREATE TABLE realest_details(
  realest_id BIGSERIAL PRIMARY KEY,
  property_id BIGSERIAL,
  bedroom INTEGER,
  bathroom INTEGER,
  floors INTEGER,
  living_area INTEGER,
  plot_size INTEGER,
  parking boolean,
  longitude VARCHAR(100),
  latutide VARCHAR(100)
);
CREATE TABLE land_details(
  land_id BIGSERIAL PRIMARY KEY,
  property_id INTEGER,
  plot_size INTEGER,
  longitude VARCHAR(100),
  latutide VARCHAR(100)
);
CREATE TABLE car_details(
  car_id BIGSERIAL PRIMARY KEY,
  property_id INTEGER,
  make VARCHAR(100),
  model VARCHAR(100),
  year VARCHAR(20),
  transmission VARCHAR(20),
  fuel VARCHAR(50)
);
INSERT INTO users
    (firstname, lastname, email, password, phone, isAdmin, status)
      VALUES(
    'patrick',
    'ishimwe',
    'patty@gmail.com',
    'patty@123',
    '0782214140',
     true,
     true
      ) RETURNING *;
INSERT INTO category
    (categ_name, user_id, status)
      VALUES(
      'real estate',
       1,
       true
      ), (
        'vehicles',
         1,
         true
        ),
        (
          'Land',
            1,
            true
          ) RETURNING *;
INSERT INTO advert_type
(advert_type_name, user_id, status)
  VALUES(
  'buy',
    1,
    true
  ), (
    'sell',
      1,
      true
    ) RETURNING *;     
INSERT INTO sub_category
(sub_categ_name, categ_id, user_id, status)
  VALUES( 
  'house',
    1,
    1,
    true
  ), (
    'apartment',
      1,
      1,
      true
    ),
    (
      'cars',
        2,
        1,
        true
      ),
      (
        'villa',
          1,
          1,
          true
        )
       RETURNING *;       
    `,
);
export { DatabaseTables as default };
