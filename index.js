const express = require('express');
const app = express();

app.use(express.json());

app.listen(
    85,
    ()=>{console.log("Serveur Express a l ecoute sur le port 85");}
);


// les sources de données.
const users = require('./users.json');

app.get('/users',(req,res)=>{
    
    //res.send("Liste des équipes")
    res.status(200).json(users);

});


// code de récupération d'une seule équipe
app.get('/user/:id',(req,res)=>{
    
    const num = parseInt(req.params.id) // on récupère le id des paramètres de la requette

    const utilisateur = users.find( element => {return element.id === num}); // on cherche l'équipe qui a le même id que num

    res.status(200).json(utilisateur);

});

// code d'ajout d'une nouvelle équipe

app.post('/users',(req,res)=>{

    users.push(req.body);
    res.status(200).json(users);

});


// code de mise à jour d'une équipe
app.put('/users/:id',(req,res)=>{
    
    const num = parseInt(req.params.id) // on récupère le id des paramètres de la requette

    const utilisateur = users.find( element => {return element.id === num}); // on cherche l'équipe qui a le même id que num

    utilisateur.name = req.body.name;

    res.status(200).json(utilisateur);

});

// code de suppression d'une équipe
app.delete('/users/:id',(req,res)=>{
    
    const num = parseInt(req.params.id) // on récupère le id des paramètres de la requette
    const utilisateur = users.find( element => {return element.id === num}); // on cherche l'équipe qui a le même id que num
    users.splice(users.indexOf(utilisateur),1);
    res.status(200).json(users);

});