import express from 'express';
import { Comment } from '../models/comment.model';
export class CommentController {
    public async getall(req: express.Request, res: express.Response): Promise<void> {

       const myCustomLabels = {
        totalDocs: 'itemCount',
        docs: 'itemsList',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
        pagingCounter: 'slNo',
        meta: 'paginator',
    };
    const options = {
        page: 1,
        limit: 10,
        collation: {
            locale: 'en',
        },
      //  customLabels: myCustomLabels,

    };

        const result = await Comment.paginate({}, options);

        res.status(200).json(result);
    }

    public getCommentById(req: express.Request, res: express.Response): void {
        const userId = parseInt(req.params.id);

        const user = { id: userId, name: `User ${userId}` };
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send('User not found');
        }
    }

    public async createComment(req: express.Request, res: express.Response) {
        // const newUser = req.body;
       

       // res.status(201).json({ message: 'User created successfully'});
    }
}