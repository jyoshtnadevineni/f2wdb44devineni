var express = require('express');
const Deer_controlers= require('../controllers/Deer');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

router.get('/', Deer_controlers.Deer_view_all_Page );
router.get('/Deer/:id', Deer_controlers.Deer_detail); 

router.get('/detail', secured,Deer_controlers.Deer_view_one_Page);

/* GET create Deer page */
router.get('/create',secured, Deer_controlers.Deer_create_Page);

/* GET create Deer page */
router.get('/update', secured,Deer_controlers.Deer_update_Page);

/* GET delete Deer page */
router.get('/delete',secured, Deer_controlers.Deer_delete_Page);

module.exports = router;
