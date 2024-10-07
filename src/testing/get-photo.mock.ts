import { join } from 'path';
import { getFileToBuffer } from './get-file-to-buffer';

export const getPhoto = async () => {
  const { buffer, stream } = await getFileToBuffer(join(__dirname, 'Lua.jpg'));

  const photo: Express.Multer.File = {
    fieldname: 'file',
    originalname: 'lua.jpg',
    encoding: '7bit',
    mimetype: 'image/png',
    size: 1024 * 50,
    stream,
    destination: '',
    filename: 'file-name',
    path: 'file-path',
    buffer,
  };
  return photo;
};
