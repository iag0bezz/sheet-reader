import multer from 'config/multer';
import { CreateFileController } from 'controllers/create-file';
import { UploadFileController } from 'controllers/upload-file';
import express from 'express';
import expressBasicAuth from 'express-basic-auth';

const app = express();

app.use(express.json())

app.use(expressBasicAuth({
  users: {
    'admin': 'admin',
    'tester': 'tester',
  },
  challenge: true,
  unauthorizedResponse: "Unauthorized, you don't have access to this page."
}))

app.post('/upload', multer.single('file'), new UploadFileController().handle);

app.get('/create', new CreateFileController().handle);

app.listen(3000, () => console.log('Server running on port 3000'));