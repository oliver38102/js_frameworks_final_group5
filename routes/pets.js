// Our router module
const router = require('express').Router();

// Our controller
const PetsController = require('../controllers/petsController');

// Our routes
router.get(`/`, PetsController.index);
router.get(`/:id`, PetsController.show);
router.post(`/`, PetsController.create);
router.post(`/update`, PetsController.update);
router.post(`/destroy`, PetsController.destroy);

// We have to export our changes
module.exports = router;