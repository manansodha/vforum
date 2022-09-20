const mysql = require('mysql');
const express = require('express');
const bodyPraser = require('body-parser');
const encoder = bodyPraser.urlencoded();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const router = express.Router();

const con = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Manan1512',
	database : 'hello'
});

con.connect(function(error){
    if (error) throw error
    else console.log('Database connected')
}
);

const app = express();

app.use("/assets", express.static("assets"));

oneDay = 1;
app.use(sessions({
    secret: 'hasvdy6fadf7aft6dfysafd6afsdt6sa56',
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
var session;



app.get('/', function(request, response){
    session=request.session 
    response.sendFile(__dirname + '/main_try_1.html');
});

app.get('/login', function(request, response){
    response.sendFile(__dirname + '/login2.html');
});



app.post("/login",encoder, function(request, response){
    var username = request.body.username;
    var password = request.body.password;
    con.query("Select * from log where regno = ? and pass = ?",[username, password], function(error, result,field){
        if (result.length>0){
            response.redirect("/mainwp3");
            session = request.session;
            session.user = username;
           
            console.log(request.session);
        }
        else{
            response.redirect("/login")
        }
        response.end();
    })
})

app.get('/loginadmin', function(request, response){
    response.sendFile(__dirname + '/login3.html');
});



app.post("/loginadmin",encoder, function(request, response){
    var username = request.body.username;
    var password = request.body.password;
    con.query("Select * from logadmin where empid = ? and pass = ?",[username, password], function(error, result,field){
        if (result.length>0){
            response.redirect("/mainwp4");
            session = request.session;
            session.user = username;
           
            console.log(request.session);
        }
        else{
            response.redirect("/login")
        }
        response.end();
    })
})




app.get("/mainwp3", function(request, response){
    response.sendFile(__dirname+"/mainwp3.html")
    
})
app.get("/mainwp4", function(request, response){
    response.sendFile(__dirname+"/mainwp4.html")
})

app.get("/clubinfo", function(request, response){
    response.sendFile(__dirname+'/clubinfo.html')
})
app.get("/myinfo", function(request, response){
    response.sendFile(__dirname+'/myinfo.html')
    con.query('select * from log where regno = ?', [session.user], function(error, result, field){
        if (error) throw error;
        else{
            response.render("myinfo.html", {sampledata: result});
        }
    })
})


app.get("/non-tech", function(request, response){
    response.sendFile(__dirname+'/non-tech.html')
})

app.get("/lang", function(request, response){
    response.sendFile(__dirname+'/lang.html')
})
app.get('/logout', function(request, response){
    request.session.destroy();
    response.redirect('/');
   
})
app.listen(4000);

