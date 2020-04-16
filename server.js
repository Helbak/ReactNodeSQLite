const express = require("express");
const app = express();
const service = new (require('./backend/services/service'));

//  async () => {
//         console.log('000000000000000000  await service.accessData();')
service.prepareData()
//        service.prepareData();
// };


// app.use(express.static("dist"));
// console.log('Listening on port: 3000 ')
// app.get("/", function (request, response) {
//         response.sendFile("index.html", { root: __dirname });
// });
// app.listen(3000);