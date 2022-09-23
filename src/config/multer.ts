import multer from 'multer';

const SUPPORTED_EXTENSIONS = ['xlsx', 'xlsm', 'xlsb', 'xltx', 'csv'];

export default multer({
  fileFilter(req, file, callback) {
    if (SUPPORTED_EXTENSIONS.includes(file.originalname.split('.').pop())) {
      callback(null, true);
    }

    callback(null, false);
  },
  storage: multer.memoryStorage(),
});
