import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {

  	@Get()
  	getHello(@Res() response: Response<string>): Response<string> {
		return response.status(200).send('hello world')
  	}
}
