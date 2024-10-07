import { Test, TestingModule } from '@nestjs/testing';
import { usersRepositoryMock } from '../testing/UserRepository.mock';
import { jwtServiceMock } from '../testing/jwt-service.mock';
import { userServiceMock } from '../testing/user-service.mock';
import { AuthService } from './auth.service';
import { userEntityList } from '../testing/user.entity-list.mock';
import { acessToken } from '../testing/acess-token.mock';
import { jwtPayload } from '../testing/jwt-payload.mock';
import { authRegisterDTO } from '../testing/auth-register-dto.mock';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        usersRepositoryMock,
        jwtServiceMock,
        userServiceMock,
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  test('Validar a definição', () => {
    expect(authService).toBeDefined();
  });

  describe('Token', () => {
    test('createToken method', () => {
      const result = authService.createToken(userEntityList[0]);

      expect(result).toEqual(acessToken);
    });

    test('checkToken method', () => {
      const result = authService.checkToken(acessToken);

      expect(result).toEqual(jwtPayload);
    });
  });

  describe('Autenticação', () => {
    test('login method', async () => {
      const result = await authService.login('teste@teste.com.br', '123456');

      expect(result).toEqual({ acessToken });
    });

    test('forget method', async () => {
      const result = await authService.forget('teste@teste.com.br');

      expect(result).toEqual({ acessToken });
    });

    test('register method', async () => {
      const result = await authService.register(authRegisterDTO);

      expect(result).toEqual({ acessToken });
    });
  });
});
