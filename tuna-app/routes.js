//SPDX-License-Identifier: Apache-2.0

var hashrecord = require('./controller.js');

module.exports = function(app){

  app.get('/get_hash_by_id/:id', function(req, res){
    hashrecord.get_hash_by_id(req, res);
  });
  app.get('/add_hash/:hashrecord', function(req, res){
    hashrecord.add_hash(req, res);
  });
  app.get('/get_hash_by_txid/:id', function(req, res){
    hashrecord.get_hash_by_txid(req, res);
  });
  app.get('/get_all_hashes', function(req, res){
    hashrecord.get_all_hashes(req, res);
  });
  
}
