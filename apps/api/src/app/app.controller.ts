import { Controller } from '@nestjs/common';

import { Message } from '@mtp-test/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  getData(): Message {
    return this.appService.getData();
  }
}
