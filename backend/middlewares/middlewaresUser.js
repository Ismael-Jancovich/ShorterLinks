const { check, validationResult } = require("express-validator");

const validateUser = [
  check("username").notEmpty().withMessage("The name is required"),
  check("mail").isEmail().withMessage("Must be a valid email"),
  check("password")
    .isLength({ min: 6, max: 50 })
    .withMessage("Password must be between 6 and 50 characters"),
  check("username").notEmpty(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const password = req.body.password;
    if (password.length > 50) {
      return res.status(400).json({ errors: [{ msg: "The password cannot be more than 50 characters" }] });
    }
    next();
  },
];


module.exports = {
  validateUser,
}