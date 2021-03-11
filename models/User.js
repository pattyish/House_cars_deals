import moment from 'moment';

class UserSchema {
  constructor(user) {
    (this.firstname = user.firstname),
      (this.lastname = user.lastname),
      (this.email = user.email),
      (this.password = user.password),
      (this.phone = user.phone),
      (this.isAdmin = false),
      (this.createdAt = moment().format()),
      (this.status = true);
  }
  static userfofile(user_id, userInf) {
    return {
      user_id: user_id,
      phone_nbr2: userInf.phone_nbr2,
      country: userInf.country,
      city: userInf.city,
      district: userInf.district,
      sector: userInf.sector,
      bio: userInf.bio,
    };
  }
  displayUser() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      isAdmin: this.isAdmin,
      createAt: this.createdAt,
      status: this.status,
    };
  }
}

export default UserSchema;
