import { ICat } from "./ICat";

export class CreateCatDto implements ICat {
    name: string;
    age: number;
    breed: string;
}