import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Teste 1',
    email: 'teste@teste.com',
    birthAt: new Date('2001-01-01'),
    password: '123456',
    id: 1,
    role: Role.Admin,
    createdAt: new Date(),
    updateAt: new Date(),
  },
  {
    name: 'Teste 2',
    email: 'teste2@teste.com',
    birthAt: new Date('2001-01-01'),
    password: '123456',
    id: 1,
    role: Role.Admin,
    createdAt: new Date(),
    updateAt: new Date(),
  },
  {
    name: 'Teste 3',
    email: 'teste3@teste.com',
    birthAt: new Date('2001-01-01'),
    password: '123456',
    id: 1,
    role: Role.Admin,
    createdAt: new Date(),
    updateAt: new Date(),
  },
];
