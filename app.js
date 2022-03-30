const express = require('express');
const app = express();
const routerItems = require('./routerItems')

app.use(express.json())

app.use('/items', routerItems)

app.listen(3000, ()=>{
    console.log('Server on port 3000')
})


