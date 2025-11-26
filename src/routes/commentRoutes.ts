import { Router} from 'express';

import { CommentController } from '../controllers/commentController';
const commentRouter: Router = Router();
const commentController = new CommentController();                                                                    

commentRouter.get('/getall', commentController.getall);
commentRouter.post('/create',commentController.createComment)

export default commentRouter;