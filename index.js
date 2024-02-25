import  Express  from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=Express();
const port=3000;
let pg=[];
let image=[];
let username=[{uname:""}];
let emailname=[{ename:""}];

/* middleware */
app.use(Express.urlencoded({extended:true}));
app.use(Express.static("frontend/public"))

/*routes*/
app.get('/login',(req,res)=>{
    res.render(__dirname+"/frontend/views/login.ejs");
})

app.get('/owner',(req,res)=>{
    res.render(__dirname+"/frontend/views/owner.ejs",{Username:username[username.length - 1]});
})

app.get('/student',(req,res)=>{
    res.render(__dirname+"/frontend/views/student.ejs",
    {   
        Username:username[username.length - 1],
        PG:pg,
        IMAGE:image
    });
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/frontend/public/index.html");
})


app.post('/submit',(req,res)=>{
    username.push(req.body["user"]);
    emailname.push(req.body["email"]);
    res.render(__dirname+"/frontend/views/home.ejs",{Username:username[username.length - 1]});
})

app.post('/pgdetails',(req,res)=>{
    pg.push(req.body);
    image.push("./img/ghar"+(Math.floor(Math.random() * 5) +1) +".jpg");
    console.log(image);
    res.render(__dirname+"/frontend/views/home.ejs",{Username:username[username.length - 1]});
})


app.listen(port,()=>{
    console.log(`listening on ${port}`);
})
