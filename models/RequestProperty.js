import moment from 'moment';

export const requestingRealest = (reqRealEst) => {
  return {
    advert_type_id: reqRealEst.advert_type_id,
    sub_categ_id: reqRealEst.sub_categ_id,
    description: reqRealEst.description,
    neighborhood: reqRealEst.neighborhood,
    currency: reqRealEst.currency,
    min_amount: reqRealEst.min_amount,
    max_amount: reqRealEst.max_amount,
    time_need: reqRealEst.time_need,
    bathroom: reqRealEst.bathroom,
    max_amount: reqRealEst.max_amount,
    country: reqRealEst.country,
    city: reqRealEst.city,
    firstname: reqRealEst.firstname,
    lastname: reqRealEst.lastname,
    email: reqRealEst.email,
    phone_nbr: reqRealEst.phone_nbr,
    createdAt: moment.defaultFormat(),
    expiredDate: reqRealEst.expiredDate,
    status: true,
  };
};

export const requestingCar = (reqVehicle) => {
  return {
    categ_name: reqVehicle.categ_name,
    advert_type_id: reqVehicle.advert_type_id,
    sub_categ_id: reqVehicle.sub_categ_id,
    description: reqVehicle.description,
    currency: reqVehicle.currency,
    min_amount: reqVehicle.min_amount,
    max_amount: reqVehicle.max_amount,
    time_need: reqVehicle.time_need,
    firstname: reqVehicle.firstname,
    lastname: reqVehicle.lastname,
    email: reqVehicle.email,
    phone_nbr: reqVehicle.phone_nbr,
    createdAt: moment.defaultFormat(),
    expiredDate: reqVehicle.expiredDate,
    status: true,
  };
};
