import mongoose, { model, PaginateModel } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
export interface IRole {

    name: string;

}
const rolechema = new Schema<IRole>({

    name: {
        type: String, required: false, unique: false,
    }
    });

rolechema.plugin(mongoosePaginate);

export const Role = model<IRole, PaginateModel<IRole>>('Comment', rolechema);

