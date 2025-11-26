import { Router, Request, Response } from 'express';

import { UserController } from '../controllers/userController';
const userRouter: Router = Router();
const userController = new UserController();                                                                    

userRouter.get('/getall', userController.getUsers);
userRouter.post('/create',userController.createUser)

export default userRouter;