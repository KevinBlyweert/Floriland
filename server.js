const express = require("express");
const app = express();
const flowers = require("./flowers");
app.get("/",(req,res)=>{
    res.sendFile("/home/student/Bureau/floriland/index.html");
});
app.get("/fleurs",(req,res)=>{
    let HTMLResponse ="<ul>";
    flowers.forEach((element)=>{
        HTMLResponse += `<li>${element}</li>`;
    });
    HTMLResponse +="</ul><br><a href='/'>Retour à l'accueil</a>";
    res.send(HTMLResponse);
});
app.listen(3000);