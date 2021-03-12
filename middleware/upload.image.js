import multer from "multer";
import path from "path";
const destination = (req, file, cb) => {
  cb(null, "./public/uploads/");
};
const filename = (req, file, cb) => {
  cb(null, Date.now() + "-" + file.originalname);
};
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extName = fileTypes.test(path.extname(file.originalname));
  if (extName) {
    cb(null, true);
  } else {
    cb("only jpg, jpeg, gif, png and mp4 allowed");
  }
};
const storage = multer.diskStorage({
  destination,
  filename
});

let upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 8 },
  fileFilter
});

export { upload as default };