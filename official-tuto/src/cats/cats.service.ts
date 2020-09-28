import { Injectable } from "@nestjs/common";
import { ICat } from "./ICat";

@Injectable()
export class CatsService {
    private readonly cats: Array<ICat> = [];

    Create(cat: ICat): ICat {
        this.cats.push(cat);
        return cat;
    }

    All(): Array<ICat> {
        return this.cats;
    }

}