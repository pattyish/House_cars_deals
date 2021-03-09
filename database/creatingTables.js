import pool from './dbConnection';

const TableCreated = pool.query(
  ` DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS user_profile;
    DROP TABLE IF EXISTS category;
    DROP TABLE IF EXISTS sub_category;
    DROP TABLE IF EXISTS advert_type;
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
  categ_id BIGSERIAL,
  createdAt DATETIME,
  status boolean
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
