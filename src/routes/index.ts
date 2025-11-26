import { Router } from 'express';
import userRouter from './userRoutes';
import commentRoute from './commentRoutes';
import uploadRouter from './upload.routes';

const routes: Router = Router();

routes.use('/users', userRouter);
routes.use('/comment', commentRoute);
routes.use('/upload', uploadRouter);


export default routes;