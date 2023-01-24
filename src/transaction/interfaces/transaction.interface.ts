import { IsNotEmpty, IsNumber, IsPositive, IsOptional, IsIn } from 'class-validator';
import { Transaction, TransactionAssociations } from './../../../models/Transaction'
import { InferAttributes } from 'sequelize'

export interface TransactionInterface extends InferAttributes<Transaction, {
     omit: 'createdAt' | 'updatedAt' | TransactionAssociations
}> {
}

//TODO: set optional on multiple fields together
export class TransactionDto implements TransactionInterface {
     id: number;

     @IsPositive()
     @IsNumber()
     amount: number;

     @IsNumber()
     @IsOptional()
     remaining: number;

     @IsIn(['partial', 'full'])
     paymentType: 'partial' | 'full';

     @IsNumber()
     @IsOptional()
     fromHotelId: number;

     @IsNumber()
     @IsOptional()
     fromAgencyId: number;

     @IsNumber()
     @IsOptional()
     fromGuestId: number;

     @IsNumber()
     @IsOptional()
     toHotelId: number;

     @IsNumber()
     @IsOptional()
     toAgencyId: number;

     @IsNumber()
     @IsOptional()
     toGuestId: number;

}