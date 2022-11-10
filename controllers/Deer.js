var Deer = require('../models/Deer');
// List of all Costumes
exports.Deer_list = function(req, res){
 res.send('NOT IMPLEMENTED: Deer list');
};
// for a specific Costume.
exports.Deer_detail = function(req, res){
 res.send('NOT IMPLEMENTED: Deer detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Deer_create_post = function(req, res){
 res.send('NOT IMPLEMENTED: Deer create POST');
};
// Handle Costume delete form on DELETE.
exports.Deer_delete = function(req, res){
 res.send('NOT IMPLEMENTED: Deer delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Deer_update_put = function(req, res){
 res.send('NOT IMPLEMENTED: Deer update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.Deer_list = async function(req, res){
    try{
    theDeer = await Deer.find();
    res.send(theDeer);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Deer_view_all_Page = async function(req, res){
    try{
    theDeer = await Deer.find();
    res.render('Deer', { title: 'Deer Search Results', results: theDeer });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Deer_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Deer();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Deer_name = req.body.Deer_name;
    document.Deer_size = req.body.Deer_size;
    document.Deer_type = req.body.Deer_type;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}