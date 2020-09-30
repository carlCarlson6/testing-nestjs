import { IProduct } from "src/core/models/IProduct";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('nest-api_product')
export class ProductEntity extends BaseEntity implements IProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    createdBy: string;
    
    @Column()
    createdAt: Date;
    
    @Column()
    updatedBy: string;
    
    @Column()
    updatedAt: Date;

}