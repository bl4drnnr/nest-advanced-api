import { Test, TestingModule } from '@nestjs/testing';
import { BannedUserController } from './banned-user.controller';

describe('BannedUsersController', () => {
  let controller: BannedUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BannedUserController]
    }).compile();

    controller = module.get<BannedUserController>(BannedUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
