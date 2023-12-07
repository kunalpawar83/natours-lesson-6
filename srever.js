const app = require('./app.js');

const port = 8000;
app.listen(port,()=>{
    console.log(`my port number is ${port}`);
})