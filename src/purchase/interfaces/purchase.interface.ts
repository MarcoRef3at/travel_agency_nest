import { IsNotEmpty, IsNumber, IsPositive, IsOptional } from 'class-validator';
import { Purchase, PurchaseAssociations } from './../../../models/Purchase'
import { InferAttributes } from 'sequelize'

// export interface PurchaseInterface {
//      id: number;
//      amount: number;
//      hotel_id: number;
//      agency_id: number;
//      transaction_id: number | null;
// }


export interface PurchaseInterface extends InferAttributes<Purchase, {
     omit: 'createdAt' | 'updatedAt' | PurchaseAssociations
}> {
}
export class PurchaseDto implements PurchaseInterface {
     id: number;

     @IsPositive()
     @IsNumber()
     amount: number;

     @IsNotEmpty()
     hotelId: number;

     @IsOptional()
     @IsNotEmpty()
     agencyId: number;

     @IsNumber()
     @IsOptional()
     transaction_id: number | null;
}