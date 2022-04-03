const express = require('express')
const os = require('os');
const app = express()
const hostname = process.env.HOSTNAME || 3000;
const config = require('./config')
// meto maquina para ver nombre de la instancia donde se abre el servidor. Para ver en cluster
const maquina = os.hostname()

app.get('/', (req, res)=>{
    //res.send('Esta es la salida del root');
    res.send(maquina)
})

app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.get('/hello',(req, res)=>{
    res.status(200)
    res.send('Hi, there California!')

})

app.listen(config.app.port, ()=>{
    console.log(`Example app listening on http://localhost:${config.app.port} ` +  maquina);
})