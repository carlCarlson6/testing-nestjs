import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, Request } from "express";

//@Injectable()
//export class LoggerMiddleware implements NestMiddleware {
//    use(request: Request, response: Response, next: Function) {
//        console.log('loggin request', request.body);
//        next();
//    }
//}

export const LoggerMiddleware = (request: Request, response: Response, next: Function) => {
    console.log('loggin request', request.body);
    next();
}