import { Message } from '@mtp-test/api-interfaces';
import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('Test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  getData(): Message {
    return this.appService.getData();
  }

  @Get('timeout')
  testTimeout(@Res() res: any): Message {
    return this.appService.getData();
  }
}
