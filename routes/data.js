var models = require('../models');

exports.dataInfo = function(req, res) {
  var dataID = req.params.id;

  // query for the specific project and
  // call the following callback
    models.Data
        .find({'_id': dataID})
        .sort('-date')
        .exec(afterQuery);

  function afterQuery(err, datas) {
    if(err) console.log(err);
    res.json(datas[0]);
  }
}

exports.addData = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
    var newData = new models.Data({
        "name": form_data.data_title,
        "date": form_data.date,
        "imageURL": form_data.image_url
    });
    newData.save(afterSaving);
    
    function afterSaving(err) {
        if(err) {console.log(err); res.send(500);}
    res.send('OK');
  }
}

exports.deleteData = function(req, res) {
  var dataID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
    models.Data
        .find({'_id': dataID})
        .remove()
        .exec(afterRemoving);
    
    function afterRemoving(err) {
    res.send();
  }
}