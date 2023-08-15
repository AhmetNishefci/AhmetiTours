const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(viewsController.alerts);

router.get('/', authController.isLoggedIn, viewsController.getOverview);

router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/me', authController.protectRoute, viewsController.getAccount);

router.get('/my-tours', authController.protectRoute, viewsController.getMyTours);

router.post(
  '/submit-user-data',
  authController.protectRoute,
  viewsController.updateUserData,
);

module.exports = router;
