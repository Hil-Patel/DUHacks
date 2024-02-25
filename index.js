import  Express  from "express";

const app=Express();
const port=3000;
let pg=[{pgname:"",landmark:"",numofbed:"",mobilenum:"",factility:"",imgname:""}];
let username="";
let emailname="";

/* middleware */
app.use(Express.urlencoded({extended:true}));

/*routes*/
app.get('/login',(req,res)=>{
    app.send();
})

app.get('/owner',(req,res)=>{
    res.send();
})

app.get('/',(req,res)=>{
    res.send();
})

app.post('/submit',(req,res)=>{
    username=req.body["user"];
    emailname=req.body["email"];
    res.render();
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})