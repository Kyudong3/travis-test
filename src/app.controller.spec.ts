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

  describe('#getTest3', () => {
    it('should return 6', () => {
      expect(appController.getTest3()).toBe(6);
    });
  });

  describe('#getTest4', () => {
    it('should return 7', () => {
      expect(appController.getTest4()).toBe(7);
    });
  });
});
