'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
response.ok("APlikasi Rest APi ini berjalan.",res);
};

//menampilkan data dr database
exports.tampilsemuamahasiswa = function name(req,res) {
connection.query('select * from mahasiswa', function(error, row, fields){
    if(error){
        connection.log(error);
    } else{
        response.ok(row, res)
    }
}); 
};