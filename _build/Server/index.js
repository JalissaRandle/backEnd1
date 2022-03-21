const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => console.log(`server running port ${SERVER_PORT}`));
