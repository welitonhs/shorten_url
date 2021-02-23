import { Router } from 'express';
import shortenURLsRouter from './shortenurls.routes';

const routes = Router();

routes.use('/encurtador', shortenURLsRouter);

export default routes;
