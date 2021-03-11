import moment from 'moment';

export const category = (category) => {
  return {
    categ_name: category.categ_name,
    user_id: category.user_id,
    createdAt: moment.defaultFormat(),
    status: true,
  };
};

export const subCategory = (subCategory) => {
  return {
    sub_categ_name: subCategory.categ_name,
    user_id: subCtegory.user_id,
    categ_id: subCategory.categ_id,
    createdAt: moment.defaultFormat(),
    status: true,
  };
};

export const advertType = (advertType) => {
  return {
    advert_type_name: advertType.advertType,
    user_id: advertType.user_id,
    createdAt: moment.defaultFormat(),
    status: true,
  };
};
