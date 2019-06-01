import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    return 'Hello Test!';
  }

  getTest2(): number {
    return 5;
  }

  getTest3(): number {
    return 6;
  }

  getTest4(): number {
    return 7;
  }
}
