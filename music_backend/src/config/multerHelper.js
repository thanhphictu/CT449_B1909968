const multer = require('multer');
let fs = require('fs-extra');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let Id = req.body.id;
        let path = `tmp/daily_gasoline_report/99`;
        fs.mkdirsSync(path);
        cb(null, path);
    },
    filename: function (req, file, cb) {
        // console.log(file);

        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + Date.now() + "." + extension);
    }
})

let upload = multer({ storage: storage });

let createUserImage = upload.array('images', 100);

let multerHelper = {
    createUserImage,
}

module.exports = multerHelper;