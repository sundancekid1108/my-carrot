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

dotenv.config();

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";
const app = express();

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

app.use(bodyParser.json());
app.use(helmet());

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}


app.get("/", (req, res) => {
    res.send("server on");
});

app.listen(app.get("port"), app.get("host"), () =>
    console.log(
        "Server is running on : " + app.get("host") + ":" + app.get("port")
    )
);
