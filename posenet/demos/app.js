const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
let app = express();
app.use(express.static('dist'));




app.get('/', (req, res)=>{
res.sendFile(path.join(__dirname+'/dist/camera.html'));
})

app.listen(PORT, ()=>{
    console.log('Started')
});
