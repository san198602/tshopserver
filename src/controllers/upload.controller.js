var fs = require("fs");
var upload = require("../models/upload.model");

var createUpload = (req, res, next) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    fileName = req.file.originalname;
    console.log(fileName);
    var file = __dirname + "/" + req.file.name;
    console.log("File Path : " + req.file.path);
   

    const filePaths = req.file.path;
    fs.readFile(filePaths, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading file.');
        }
      ////  console.log(data,file);
        //saveCSV(data);





    });

};


var saveCSV = (data,file) => {
    let up = new upload({
        fileType: "String",
        originalFileName: "String",
        uploadedBy: "String",
        csvData: data,
        data: data,


    })
    try {
        up.save()
            .then(response => {
              
                 console.log("Upload successfully");
            })
            .catch(error => {
                console.log(error);
            })
    } catch (error) {

        console.log(error);
    }
}


var uploadOBJ = {
    createUpload: createUpload
}

module.exports = uploadOBJ;