const express = require("express");
const app = express();
const PORT = 3000;
const flowers = require("./flowers");
const functions = require("./functions");
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
    res.send(`${__dirname}/index.html`);
});
app.get("/fleurs",(req,res)=>{
    let HTMLResponse =functions.setHeader();
    HTMLResponse +="<ul>";
    // let HTMLResponse ="<ul>";
    flowers.forEach((element)=>{
        HTMLResponse += `<li><a href="${req.url}/${element}">${element}</a></li>`;
    });
    HTMLResponse +="</ul></main><div id='links'><a href='/'>Retour à l'accueil</a></div>";
    res.send(HTMLResponse);
});
app.get("/fleurs/:id",(req,res)=>{
    res.send(`${functions.setHeader()}Vous avez choisi la fleur : ${req.params.id}</main><div id="links"><a href='/'>Retour à l'accueil</a><a href='/fleurs'>Retour aux fleurs</a></div>`);
});
app.listen(PORT);