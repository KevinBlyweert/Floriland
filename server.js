const express = require("express");
const app = express();
const PORT = 3000;
const flowers = require("./flowers");
app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
});
app.get("/fleurs",(req,res)=>{
    let HTMLResponse ="<ul>";
    flowers.forEach((element)=>{
        HTMLResponse += `<li><a href="${req.url}/${element}">${element}</a></li>`;
    });
    HTMLResponse +="</ul><br><a href='/'>Retour à l'accueil</a>";
    res.send(HTMLResponse);
});
app.get("/fleurs/:id",(req,res)=>{
    res.send(`Vous avez choisi la fleur : ${req.params.id}<br><a href='/'>Retour à l'accueil</a>`);
});
app.listen(PORT);