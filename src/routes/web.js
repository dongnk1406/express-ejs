import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)

    router.get('/about', (req, res) => {
        res.send('about');
    })

    return app.use('/', router);

}

export default initWebRoute;