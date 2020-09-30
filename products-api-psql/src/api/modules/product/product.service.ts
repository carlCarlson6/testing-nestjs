import { Injectable } from "@nestjs/common";
import { IProduct } from "src/core/models/IProduct";
import { ProductEntity } from "src/database/entities/product.entity";

@Injectable()
export class ProductService {

    async FindAllProducts(): Promise<Array<IProduct>> {
        const products: Array<IProduct> = await ProductEntity.find();
        return products;
    }

    async AddProducts(name: string, description: string, createdBy: string): Promise<IProduct> {
        const createdAt: Date = new Date(); 
        
        const product: ProductEntity = ProductEntity.create({name, description, createdBy, createdAt});
        await product.save();

        return product;
    }

}