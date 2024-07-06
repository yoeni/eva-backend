import express from 'express';
import sequelize from './src/data_access/sequelize';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import config from './config'
import { bulkInsertExample } from './src/data_access/seed';
import Router from './src/Router';
import CronJobs from './src/CronJob';
const app = express();
const apiRouter = express.Router();

const corsOptions ={
    origin: config.CLIENT_URL,
    credentials: true,
    optionSuccessStatus: 200,
    exposedHeaders: 'x-auth-token'
}

app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.locals.startEpoch = Date.now();
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: config.EXPRESS_SESSION_SECRET ,
resave: false,
saveUninitialized: true,
cookie: {httpOnly: false}}));

app.use(apiRouter);

new Router(apiRouter);

sequelize.sync({ alter: true }).then(async () => {
    console.log('Database & tables created!');
    
    await bulkInsertExample();
    new CronJobs();
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});