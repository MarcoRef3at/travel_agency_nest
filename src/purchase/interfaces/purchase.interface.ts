import { IsNotEmpty, IsNumber, IsPositive, IsOptional } from 'class-validator';

export interface PurchaseInterface {
     id: number;
     amount: number;
     hotel_id: number;
     agency_id: number;
     transaction_id: number | null;
}

export class PurchaseDto implements PurchaseInterface {
     id: number;

     @IsPositive()
     @IsNumber()
     amount: number;

     @IsNotEmpty()
     hotel_id: number;

     @IsOptional()
     @IsNotEmpty()
     agency_id: number;

     @IsNumber()
     @IsOptional()
     transaction_id: number | null;
}