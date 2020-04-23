const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const service = new (require('./backend/services/service'));


 const prepareData = async function() {
    console.log('<<<   prepareData()');
    await service.prepareData();
};
prepareData();

app.use(express.static("dist"));
console.log('Listening on port: 3000 ')
app.get("/", function (request, response) {
        response.sendFile("index.html", { root: __dirname });
});
app.post('/users', service.getUserList);
app.listen(3000);