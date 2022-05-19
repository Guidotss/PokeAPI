const express = require('express'); 
const morgan = require('morgan'); 
const app = express(); 
const routerPokemon = require('./router/routerPokemons')

app.use(express.urlencoded({extended:true})); 
app.use(express.static(__dirname+'/public'));
app.use(express.json()); 
app.use(morgan('dev')); 
app.use('/team',routerPokemon); 



const PORT = 8080; 

const Server = app.listen(PORT,() =>{
    console.log(`Server on por ${Server.address().port}`);
})

Server.on('error',err =>console.log(err)); 



