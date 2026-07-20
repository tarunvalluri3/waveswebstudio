import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./src/uploads");
  },

  filename(req, file, cb) {
    const extension = path.extname(file.originalname);

    cb(null, `${Date.now()}${extension}`);
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed."));
    }

    cb(null, true);
  },
});

export default upload;