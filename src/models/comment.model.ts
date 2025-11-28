import mongoose from 'mongoose';


import mongoosePaginate from 'mongoose-paginate-v2';
import { model, PaginateModel } from 'mongoose';
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

export interface Icomment {
    id: Number,
    postId: Number,
    name: string;
    email: string;
    body: String; 
}

const commentSchema = new Schema<Icomment>({
    id: Number,
    postId: Number,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },


});
commentSchema.plugin(mongoosePaginate);
export const Comment = model<Icomment, PaginateModel<Icomment>>('Comment', commentSchema);