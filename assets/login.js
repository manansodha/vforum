import { createConnection } from 'mysql';
import express, { Router, sessions as _sessions, json, urlencoded } from 'express';
import { urlencoded as _urlencoded } from 'body-parser';
const encoder = _urlencoded();
import cookieParser from "cookie-parser";
import sessions from 'express-session';

const router = Router();

const con = createConnection({
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

oneDay = 60;
app.use(sessions({
    secret: 'hasvdy6fadf7aft6dfysafd6afsdt6sa56',
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}))
app.use(json());
app.use(urlencoded({extended: true}))
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
        }
        else{
            response.redirect("/login");
        }
        response.end();
    })
})





app.get("/mainwp3", function(request, response){
    response.sendFile(__dirname+"/mainwp3.html")
})
app.get("/mainwp4", function(request, response){
    response.sendFile(__dirname+"/mainwp3.html")
})

app.get("/clubinfo", function(request, response){
    response.sendFile(__dirname+'/clubinfo.html')
})
app.get("/myinfo", function(request, response){
    response.sendFile(__dirname+'/myinfo.html')
})


app.get("/non-tech", function(request, response){
    response.sendFile(__dirname+'/non-tech.html')
})

app.get("/lang", function(request, response){
    response.sendFile(__dirname+'/lang.html')
})
app.get('/logout', function(request, response){
    request.logout();
    request.session = null;
    response.redirect('/');
})
app.listen(4000);
