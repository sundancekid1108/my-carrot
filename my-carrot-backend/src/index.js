import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import fs from 'fs'
import path from 'path'
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import multer from 'multer';
import DatabaseConnect from './database/databaseconfig.js'
import router from './routes/route.js'


dotenv.config();


const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();

app.use(bodyParser.json()) // 요청을 JSON으로 파싱
app.use(bodyParser.urlencoded({ extended: false }))


app.use(router)

app.use(morgan('combined'));
app.disable('x-powered-by');

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    })
);

app.use(helmet());

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}


//Database Connect
DatabaseConnect()


app.get("/", (req, res) => {
    res.send("server on").status(200);
});

app.listen(PORT, () => {
    console.log('Server is running on Port: ' + PORT);
});


