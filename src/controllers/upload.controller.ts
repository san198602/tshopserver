import fs from "fs";
import express from 'express';
import {upload}  from "../models/uploads.model";
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

            let up = new upload({
                fileType: "String",
                originalFileName: "String",
                uploadedBy: "String",
                csvData: data,
                data: data,


            })
            try {
                up.save()
                    .then((response: any) => {

                        console.log("Upload successfully");
                    })
                    .catch((error: any) => {
                        console.log(error);
                    })
            } catch (error) {

                console.log(error);
            }


            /// var allItems = data.split("\n");

            //console.log(allItems);

        });

    };




}

