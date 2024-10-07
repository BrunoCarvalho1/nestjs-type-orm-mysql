import { jwtPayload } from './jwt-payload.mock';
import { acessToken } from './acess-token.mock';
import { AuthService } from '../auth/auth.service';

export const authServiceMock = {
  provide: AuthService,
  useValue: {
    createToken: jest.fn().mockReturnValue({ acessToken }),
    checkToken: jest.fn().mockResolvedValue(jwtPayload),
    isValidToken: jest.fn().mockReturnValue(true),
    login: jest.fn().mockResolvedValue({ acessToken }),
    forget: jest.fn().mockResolvedValue({ sucess: true }),
    reset: jest.fn().mockResolvedValue({ acessToken }),
    register: jest.fn().mockResolvedValue({ acessToken }),
  },
};
