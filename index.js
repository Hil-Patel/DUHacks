import  Express  from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=Express();
const port=3000;
let pg=[{pgname:"",landmark:"",numofbed:"",mobilenum:"",factility:"",imgname:""}];
let username="";
let emailname="";

/* middleware */
app.use(Express.urlencoded({extended:true}));

/*routes*/
app.get('/login',(req,res)=>{
    app.sendFile(__dirname+"frontend/login.html");
})

app.get('/owner',(req,res)=>{
    res.sendFile();
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/frontend/index.html");
})

app.post('/submit',(req,res)=>{
    username=req.body["user"];
    emailname=req.body["email"];
    res.render();
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})