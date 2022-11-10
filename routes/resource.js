var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Deer_controller = require('../controllers/Deer');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Deer', Deer_controller.Deer_create_post);
// DELETE request to delete Costume.
router.delete('/Deer/:id', Deer_controller.Deer_delete);
// PUT request to update Costume.
router.put('/Deer/:id', Deer_controller.Deer_update_put);
// GET request for one Deer.
router.get('/Deer/:id', Deer_controller.Deer_detail);
// GET request for list of all Deer items.
router.get('/Deer', Deer_controller.Deer_list);
module.exports = router;