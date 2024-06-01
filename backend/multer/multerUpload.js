const multer =  require("multer");

const venuePicStorage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"../frontend/userpanel/src/images/venuePics");
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`);
    }
});
const venuePicUpload =  multer({storage:venuePicStorage});

module.exports = {venuePicUpload}