const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const mongoosePaginate = require('mongoose-paginate-v2');

const UploadSchema = new Schema({
    
   // _id: false,
    
    csvData: { type: Buffer, required: false },
    data: { type: String, required: false },
    dataType: { type: String, required: false },
    fileType: { type: String, required: false },
    originalFileName: { type: String, required: false },
    uploadedBy: { type: String, required: false },
    isProcessed: { type: Boolean, default: false },
    status: { type: String, default: null },
    message: { type: String, required: false },
    markDelete: { type: Boolean, default: false },
    
   


}, {
    timestamps: true, // Enable timestamps
});
UploadSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Upload', UploadSchema);
