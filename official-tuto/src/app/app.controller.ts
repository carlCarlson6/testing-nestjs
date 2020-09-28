import { Controller, Get } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly catService: CatsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
