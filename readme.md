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
