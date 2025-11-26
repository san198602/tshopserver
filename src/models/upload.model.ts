// import mongoose from 'mongoose';


// import mongoosePaginate from 'mongoose-paginate-v2';
// import { model, PaginateModel } from 'mongoose';
// const Schema = mongoose.Schema;
// mongoose.Promise = global.Promise;


// export interface IUpload {
//     originalFileName: string,
//     fileType: string,
//     dataType: string;
//     data: string;
//     csvData: Buffer;
//     uploadedBy: String,
//     isProcessed: Boolean,
//     status: String,
//     message: String,
//     markDelete: Boolean,
// }
// const UploadSchema = new Schema<IUpload>({
//     csvData: { type: Buffer, required: false },
//     data: { type: String, required: false },
//     dataType: { type: String, required: false },
//     fileType: { type: String, required: false },
//     originalFileName: { type: String, required: false },
//     uploadedBy: { type: String, required: false },
//     isProcessed: { type: Boolean, default: false },
//     status: { type: String, default: null },
//     message: { type: String, required: false },
//     markDelete: { type: Boolean, default: false },
// });
// UploadSchema.plugin(mongoosePaginate);


// export const upload = model<IUpload, PaginateModel<IUpload>>('Upload', UploadSchema);