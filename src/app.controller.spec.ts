import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('#getTest', () => {
    it('should return "Hello Test!"', () => {
      expect(appController.getTest()).toBe('Hello Test!');
    });
  });

  describe('#getTest2', () => {
    it('should return 5', () => {
      expect(appController.getTest2()).toBe(5);
    });
  });
});
