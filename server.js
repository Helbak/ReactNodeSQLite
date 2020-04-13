
const express = require("express");
const app = express();
app.use(express.static("dist"));
// app.use(express.static("src"));
console.log('Listening on port: 3000 ')
app.get("/", function(request, response){
        response.sendFile("index.html", { root: __dirname });
});

app.listen(3000);
