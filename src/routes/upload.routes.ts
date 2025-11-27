import multer from 'multer';
import express from 'express'; // Assuming you are using Express
import path from 'path';
const uploadRouter = express.Router();
const storage = multer.diskStorage({
    destination : "uploads/",
    
    filename: (req, file, callback) => {
      //  callback(null, Date.now() + '-' + file.originalname);
        callback(null, file.originalname);
     // callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });


import { UploadController } from '../controllers/upload.controller';
const uploadController = new UploadController();

// router.get('/getAdminById/:id', uploadController.getUploadById);
// router.get('/getAdminByParams', uploadController.getUploadByParams);

// router.get('/getalluploads', uploadController.getalluploads);
uploadRouter.post('/create', upload.single('csv'), uploadController.createUpload);
// router.put('/updateUpload/:id', uploadController.updateAdmin);
// router.delete('/deleteUpload/:id', uploadController.deleteAdmin);
export default uploadRouter;
