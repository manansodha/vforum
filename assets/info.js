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


var normalResults;
const lst1 = [];
const t = 'TNL';
conn.query('Select clubname from clubinfo where type = ?', [t[0]], function(err, result){
    if (err) throw err;
    else {
        
      normalResults = result.map((mysqlObj, index) => {
        return Object.assign({}, mysqlObj);
    });
    }
    for (var key in normalResults) {
      if (normalResults.hasOwnProperty(key)) {
          lst1.push( [normalResults[key] ] );
      }
  }
})
console.log(lst1)


function info(){

  const f = 'abcdefghijklmnopqrstuvwxy';
  const row = document.createElement("tr");
  const data = document.createElement("td");
  const card = document.createElement("div");
  card.className = "club-card";
  const tumb = document.createElement("div");
  tumb.className = "card-tumb";
  const details = document.createElement("div");
  details.className = "club-details"; 
  const bottom = document.createElement("div");
  bottom.className = "club-bottom";
  const type = document.createElement("span");
  type.className = 'club-type';
  const clb_name = document.createElement('h4');
  const clb_name_link = document.createElement('a');
  const text = document.createElement("p");
  const btn = document.createElement('button');
  btn.id = 'join-btn';
  const image = document.createElement("img");
  image.src = "assets/vitlogo.png";
  tumb.appendChild(image);


  type.textContent = "Technical Club";
  clb_name_link.textContent = 'Antrix';
  text.textContent = "abcdefghijklmnopqrstuvwxyz";
  btn.textContent = "Join";
  data.append(card);
  card.append(tumb);
  card.append(details);
  details.append(type);
  details.append(clb_name);
  clb_name.appendChild(clb_name_link);
  details.append(text);
  details.append(bottom);
  bottom.appendChild(btn);


  const table = document.querySelector("#tech-club");
  
  for (var j = 0; j<6; j++){
    var r = table.insertRow();
    var k = 1
    for (var i = 0; i<=k; i++){
      clb_name_link.textContent = f[i]
      r.insertCell(i).appendChild(data);
      k = k+1; 
    }
}  
 
    
}




