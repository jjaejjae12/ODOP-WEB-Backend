"use strict";

const app = require("../app");
const PORT = 3000;
const hostname = '10.120.74.83'

app.listen(PORT, hostname, ()=>{
    console.log("[SERVER] start 3000");
});