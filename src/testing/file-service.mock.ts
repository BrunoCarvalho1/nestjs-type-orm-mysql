import { UserService } from '../user/user.service';

export const fileServiceMock = {
  provide: UserService,
  useValue: {
    getDestinationPath: jest.fn(),
    upload: jest.fn().mockResolvedValue(''),
  },
};
