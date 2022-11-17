var Deer = require('../models/Deer');
// List of all Costumes
exports.Deer_list = function(req, res){
 res.send('NOT IMPLEMENTED: Deer list');
};
// for a specific Costume.
exports.Deer_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Deer.findById( req.params.id) 
        res.send(result)
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Deer delete form on DELETE.
exports.Deer_delete = function(req, res){
 res.send('NOT IMPLEMENTED: Deer delete DELETE ' + req.params.id);
};
// Handle Deer update form on PUT.

exports.Deer_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Deer.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Deer_Name) toUpdate.Deer_Name = req.body.Deer_Name; 
        if(req.body.Deer_size) toUpdate.Deer_size = req.body.Deer_size; 
        if(req.body.Deer_type) toUpdate.Deer_type = req.body.Deer_type; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
 
// VIEWS

   // List of all Deer
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
   //Handle Deer create on POST.
exports.Deer_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Deer();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Deer_type":"goat", "cost":12, "size":"large"}
    document.Deer_Name = req.body.Deer_Name;
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
// Handle Deer delete on DELETE.
exports.Deer_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Deer.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.Deer_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Deer.findById( req.query.id)
    res.render('Deerdetail',
    { title: 'Deer Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a Deer.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Deer_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Deercreate', { title: 'Deer Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a Deer.
// query provides the id
exports.Deer_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Deer.findById(req.query.id)
    res.render('Deerupdate', { title: 'Deer Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.Deer_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Deer.findById(req.query.id)
    res.render('Deerdelete', { title: 'Deer Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };