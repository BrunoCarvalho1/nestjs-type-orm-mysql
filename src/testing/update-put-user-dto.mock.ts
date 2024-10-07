import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user.dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  birthAt: '2001-01-01',
  email: 'teste@teste.com',
  name: 'Teste teste',
  password: '123456',
  role: Role.User,
};
