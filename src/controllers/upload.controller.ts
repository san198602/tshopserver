import fs from "fs";
import express from 'express';

import path from 'path';
import { Upload } from "../models/uploads.model";
export class UploadController {

    public createUpload(req: express.Request, res: express.Response, next: express.NextFunction): any {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        var fileName = req.file.originalname;
        console.log(fileName);

        console.log("File Path : " + req.file.path);


        const filePaths = req.file.path;
        fs.readFile(filePaths, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).send('Error reading file.');
            }



            //var allItems = data.split("\n");
            var allItems = data.replace(/[\n\r]/g, '')


            for (let i = 0; i < allItems.length; i++) {
                allItems.split(",");
                var trainno = allItems[0];
                console.log(trainno);
            }

            try {
                fs.unlinkSync("uploads/" + fileName);
                console.log('File successfully deleted');
            } catch (err) {
                console.error('Error deleting file:', err);
            }

        });

    };
    public saveData(data: any): String {
        let upload = new Upload({
            fileType: "String",
            originalFileName: "String",
            uploadedBy: "String",
            csvData: data,
            data: data,


        })
        upload.save()
            .then((response: any) => {
                return "Upload successfully";

            })
            .catch((error: any) => {
                console.log(error);
            })
        return "Upload successfully";
    }
}

