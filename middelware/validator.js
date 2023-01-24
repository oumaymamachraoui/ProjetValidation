const { check, validationResult } = require("express-validator");

exports.registerValidator = () => [
  check("nom", "this field is required").notEmpty(),
  check("email", "this field should be valid").isEmail(),
  check("email", "this field is required").notEmpty(),
  check("password", "should have at least 8 character")
    .isLength({ min: 6 })
    .notEmpty(),
];

exports.loginValidation = () => [
  check("email", "email must be valid").isEmail(),
  check("password", "shpuld be at leat 6 carcters")
    .isLength({ min: 6 })
    .notEmpty(),
];

exports.validation = (req, res, next) => {
  // const errors = validationResult(req);
  // errors.isEmpty() ? next() : res.status(400).send(errors.array());

  const error = validationResult(req);
  if (!error.isEmpty()) {
      res.status(200).json({ errors: error.array() });
  }
  next();
};
