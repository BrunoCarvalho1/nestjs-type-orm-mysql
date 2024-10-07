import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  birthAt: '2001-01-01',
  email: 'teste@teste.com',
  name: 'Teste teste',
  password: '123456',
  role: Role.User,
};
