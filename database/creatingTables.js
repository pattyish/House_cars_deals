import pool from './dbConnection';

const TableCreated = pool.query(
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
  lastname VARCHAR(50) NOT null unique,
  email VARCHAR(150) NOT null unique,
  password VARCHAR(150) NOT null,
  phone VARCHAR(50) NOT null unique,
  isAdmin boolean,
  createdAt DATETIME null,
  status VARCHAR(30) NOT null
);
CREATE TABLE user_profile(
  user_prof_id BIGSERIAL PRIMARY KEY,
  user_id BIGSERIAL,
  Phone_nbr2 VARCHAR(50) NOT null unique,
  country VARCHAR(50),
  city VARCHAR(100),
  district VARCHAR(100), 
  sector VARCHAR(150),
  bio TEXT 
);
  CREATE TABLE category(
    categ_id BIGSERIAL PRIMARY KEY,
    categ_name VARCHAR(50) NOT null,
    createdAt DATETIME,
    status boolean,
    user_id BIGSERIAL
);
CREATE TABLE sub_category(
  sub_categ_id BIGSERIAL PRIMARY KEY,
  sub_categ_name VARCHAR(50) NOT null,
  user_id BIGSERIAL,
  categ_id BIGSERIAL,
  createdAt DATETIME,
  status boolean
);
CREATE TABLE advert_type(
  advert_type_id BIGSERIAL PRIMARY KEY,
  advert_type_name VARCHAR(50) NOT null,
  user_id BIGSERIAL,
  createdAt DATETIME,
  status boolean
);
CREATE TABLE properties(
  property_id BIGSERIAL PRIMARY KEY,
  title TEXT NOT null,
  description TEXT NOT null,
  main_image VARCHAR(200) NOT null,
  advert_type_id BIGSERIAL,
  sub_categ_id BIGSERIAL,
  createdAt DATETIME null,
  createdAt DATETIME null,
  status boolean
);
CREATE TABLE realestate_requests(
  pro_req_id BIGSERIAL PRIMARY KEY,
  advert_type_id BIGSERIAL,
  sub_categ_id BIGSERIAL,
  description TEXT NOT null,
  neighborhood TEXT,
  currency VARCHAR(50) NOT null,
  min_amount money NOT null,
  max_amount money NOT null,
  time_need VARCHAR(50) NOT null,
  bedroom VARCHAR(50),
  bathroom VARCHAR(50),
  country VARCHAR(100) NOT null,
  city VARCHAR(100) NOT null,
  firstname VARCHAR(50) NOT null,
  lastname VARCHAR(50) NOT null,
  email  VARCHAR(100),
  phone_nbr VARCHAR(50) NOT null,
  createdAt DATETIME null,
  expiredDate DATETIME null,
  status boolean
);
CREATE TABLE vehicle_requests(
  veh_req_id BIGSERIAL PRIMARY KEY,
  advert_type_id BIGSERIAL,
  sub_categ_id BIGSERIAL,
  description TEXT NOT null,
  currency VARCHAR(50) NOT null,
  min_amount money NOT null,
  max_amount money NOT null,
  time_need VARCHAR(50) NOT null,
  firstname VARCHAR(50) NOT null,
  lastname VARCHAR(50) NOT null,
  email  VARCHAR(100),
  phone_nbr VARCHAR(50) NOT null,
  createdAt DATETIME null,
  expiredDate DATETIME null,
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
  TEXT NOT null,
  longitude VARCHAR(100),
  latutide VARCHAR(100)
);
CREATE TABLE land_details(
  land_id BIGSERIAL PRIMARY KEY,
  property_id BIGSERIAL,
  plot_size INTEGER,
  longitude VARCHAR(100),
  latutide VARCHAR(100)
);
CREATE TABLE car_details(
  car_id BIGSERIAL PRIMARY KEY,
  property_id BIGSERIAL,
  make VARCHAR(100),
  model VARCHAR(100),
  year VARCHAR(20),
  transmission VARCHAR(20),
  fuel VARCHAR(50)
);
    INSERT INTO employees 
    (empl_name, nationalId, phone, email, dob, position, status)
      VALUES(
      'patrick', 
      '1234567890123456',
      '0782214140',
      'patrickishimwe40@gmail.com',
      '04/09/1996',
      'developer',
      'inactive' 
      ) RETURNING *;
      INSERT INTO managers 
      (manager_name, nationalId, phone, email, dob, position, status, password)
        VALUES(
        'admin', 
        '1199770030084020',
        '0782223230',
        'patrickishimwe50@gmail.com',
        '04/09/1996',
        'manager',
        'active',
        'password'
        ) RETURNING *;  
    `,
);
export { TableCreated as default };
