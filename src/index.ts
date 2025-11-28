import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';
import compression from "compression";
import cookieParser from "cookie-parser"
import * as dotenv from 'dotenv';

import { connectMongoose } from "./db/connectToMongoDB";
import index from "./routes/index";
//import {} from "./utils/generateKey";

connectMongoose();
dotenv.config();

const app = express();
const PORT = 8080;
//const HOSTNAME = process.env.NODE_HOST;
const HOSTNAME = '172.18.155.34';

app.use(express.json({ limit: '10mb' }));
app.use(
  express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }),
);


app.use(cors({
    credentials: true,
    optionsSuccessStatus: 200
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,PATCH,PUT,POST,DELETE");
    res.header("Access-Control-Expose-Headers", "Content-Length");
    res.header(
        "Access-Control-Allow-Headers",
        "Accept, Authorization,x-auth-token, Content-Type, X-Requested-With, Range"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use('/', index);


//const server = http.createServer(app)
// const server = http.createServer((req, res) => {
// res.statusCode = 200;
// res.setHeader('Content-Type', 'application/json');
// res.end('Hello World\n');
// });

 
    app.listen(PORT, HOSTNAME, () => {
      console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
    });

// server.listen(PORT,HOST,() => {
//     //console.log(`SERVER RUNNING ON http://localhost:${PORT}/`);
//      console.log(`Server running at http://${HOST}:${PORT}/`);
// });



module.exports = app;
