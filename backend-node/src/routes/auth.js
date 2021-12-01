const router = require("express").Router();
const authController = require("../controllers/auth");
const validationMiddleware = require("../middleware/validationMiddleware");
const { check } = require("express-validator");

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .normalizeEmail()
      .escape()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Must be at least 6 characters long"),
  ],
  validationMiddleware,
  authController.login
);
router.post(
  "/registerEmailCheck",
  [
    check("email")
      .isEmail()
      .normalizeEmail()
      .escape()
      .withMessage("Must be correctly formatted e-mail"),
  ],
  validationMiddleware,
  authController.registerEmailCheck
);
//escape kaotab 2ra koik debiilsed symbolid nimedest ja emailidest kuna nimed ja emailid peavad olema korrektses formaadis
router.post(
  "/signup",
  [
    ///pean vist panema kuidagi firsname ja lastname kokku yhte checki? et kordusi v2hendada?
    check("firstName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .escape()
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .withMessage("Must be alphabetic"),
    check("lastName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .escape()
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .withMessage("Must be alphabetic"),
    check("email")
      .escape()
      .isEmail()
      .normalizeEmail()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
    //saab panna .isStrongPassword et parool peaks sisaldama suuri ja v2ikseid t2hti
      .isLength({ min: 6 })
      .withMessage("Must be at least 6 characters long"),
  ],
  validationMiddleware,
  authController.signup
);

module.exports = router;
