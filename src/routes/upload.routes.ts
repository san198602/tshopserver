import multer from 'multer';
import express from 'express'; // Assuming you are using Express
const uploadRouter = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
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
