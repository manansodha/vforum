var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost', // Replace with your host name
    user: 'root',      // Replace with your database username
    password: 'Manan1512',      // Replace with your database password
    database: 'hello' // // Replace with your database Name
  }); 
  conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });



const lst1 = [];
const lst2 = [];
const lst3 = [];
const t = 'TNL';
conn.query('Select * from clubinfo where type = ?', [t[0]], function(err, result){
    if (err) throw err;
    else {
        
        for(var i = 0; i<result.length; i++){
          lst1[i] = result[i];
        }
        
    }
})
conn.query('Select * from clubinfo where type = ?', [t[1]], function(err, result){
    if (err) throw err;
    else {
        
        for(var i = 0; i<result.length; i++){
          lst2[i] = result[i];
        }
        
    }
})

conn.query('Select * from clubinfo where type = ?', [t[2]], function(err, result){
  if (err) throw err;
  else {
      
      for(var i = 0; i<result.length; i++){
        lst3[i] = result[i];
      }
      
  }
}
)


