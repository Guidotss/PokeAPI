const {Router} = require('express'); 
const router = Router(); 

router.get('/',(req,res)=>{
    res.send('hola'); 
})

router.post('/pokemons',(req,res)=>{

})

router.put('/',(req,res)=>{

})

router.delete('/pokemons/:pokeId', (req,res)=>{

})

module.exports = router;




