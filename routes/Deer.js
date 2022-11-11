var express = require('express');
const Deer_controlers= require('../controllers/Deer');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Deer', { title: 'Search Results Deer' });
// });
// var express = require('express');

// var router = express.Router();
/* GET costumes */
router.get('/', Deer_controlers.Deer_view_all_Page );
// GET request for one costume. 
 //router.get('/Deer/:id',Deer_controlers.Deer_detail); 
 
 //router.put('/Deer/:id', Deer_controlers.Deer_update_put);

module.exports = router;

