import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './CreateCatDto';
import { ICat } from './ICat';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Get()
    async findAll(@Res() response: Response<Array<ICat>>): Promise<Response<Array<ICat>>> {
        const allCats: Array<ICat> = this.catsService.All();
    
        return response.status(HttpStatus.OK).send(allCats);
    }

    @Get('cat/:id')
    find(@Req() resquest: Request, @Res() response: Response, @Param('id') id: number): Response {
        return response.status(HttpStatus.OK).send(`spefic cat with id ${id}`);
    }


    @Post()
    async create(@Body() createCatDto: CreateCatDto, @Res() response: Response<ICat>): Promise<Response<ICat>> {
        const createdCat: ICat = this.catsService.Create(createCatDto);

        return response.status(HttpStatus.CREATED).send(createdCat);
    }
}
