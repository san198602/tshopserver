import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
export class UserController {
    public async getUsers(req: Request, res: Response): Promise<void> {

        const options = {
            page: 1,
            limit: 10,
            // Other options like sort, select, populate, etc.
        };

        const result = await UserModel.paginate({}, options);

        res.status(200).json(result);
    }

    public getUserById(req: Request, res: Response): void {
        const userId = parseInt(req.params.id);

        const user = { id: userId, name: `User ${userId}` };
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send('User not found');
        }
    }

    public async createUser(req: Request, res: Response) {
        // const newUser = req.body;
        const newUser = new UserModel({
            name: 'John Doe1',
            email: 'john02.doe@example.com',
            age: 30,
        });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    }
}