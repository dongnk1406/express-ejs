
import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();

const app = express()
const port = process.env.PORT || 8080;

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// Template engine
configViewEngine(app);

// routes
routes.initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/ `);
})