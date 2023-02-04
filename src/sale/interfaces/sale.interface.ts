import { IsNotEmpty, IsNumber, IsPositive, IsOptional } from 'class-validator';
import { Sale, SaleAssociations } from '../../../models/Sale'
import { InferAttributes } from 'sequelize'

export interface SaleInterface extends InferAttributes<Sale, {
     omit: 'createdAt' | 'updatedAt' | SaleAssociations
}> {
}
// export class SaleDto implements SaleInterface {
//      id: number;

//      @IsPositive()
//      @IsNumber()
//      amount: number;

//      status: string;

//      guestId: number;

//      agencyId: number;

//      @IsNumber()
//      @IsOptional()
//      transactionId: number;
// }