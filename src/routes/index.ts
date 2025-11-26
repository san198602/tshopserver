import { Router } from 'express';
import userRouter from './userRoutes';
import commentRoute from './commentRoutes';

const routes: Router = Router();

routes.use('/users', userRouter);
routes.use('/comment', commentRoute);

export default routes;