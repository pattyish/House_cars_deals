const { check } = require('express-validator');

export const agentRegFormValidation = [
  check('firstname', 'First Name is Required').not().isEmpty().trim(),
  check('lastname', 'Last Name is Required').not().isEmpty().trim(),
  check('email', 'Email is Required and must be valid email')
    .isEmail()
    .normalizeEmail(),

  check('password')
    .isLength({ min: 8 })
    .withMessage('must be at least 5 chars long')
    .matches(/\d/)
    .withMessage('must contain a number'),
  check('phone', 'Mobile Phone is Required').not().isEmpty(),
];

export const loginFormValidation = [
  check('email', 'Email is Required and must be valid email')
    .isEmail()
    .normalizeEmail(),
  check('password', 'Password is required!!!').not().isEmpty().trim(),
];

export const advertFormValidation = [
  check('title', 'Title is Required').not().isEmpty().trim(),
  check('description', 'Description is Required').not().isEmpty().trim(),
  check('mainImage', 'You must select Image before continue').notEmpty(),
  check('proCountry', 'Country Property located in is required')
    .not()
    .isEmpty(),
  check('proCity', 'City Property located in is required').not().isEmpty(),
  check('proDistrict', 'District Property located in is required')
    .not()
    .isEmpty(),
  check('phoneNbr1', 'Mobile Phone is Required').not().isEmpty(),
  check('agentCountry', 'Country is Required').not().isEmpty(),
  check('agentCity', 'City is Required').not().isEmpty(),
  check('agentDaistrict', 'District is Required').not().isEmpty(),
];

// @desc valitation for the advert for agent who is registered
export const advertValidation = [
  check('title', 'Title is Required').not().isEmpty().trim(),
  check('description', 'Description is Required').not().isEmpty().trim(),
  check('proCountry', 'Country Property located in is required')
    .not()
    .isEmpty(),
  check('proCity', 'City Property located in is required').not().isEmpty(),
  check('proDistrict', 'District Property located in is required')
    .not()
    .isEmpty(),
    check('expiredAt', 'City Property located in is required').not().isEmpty(),
];
