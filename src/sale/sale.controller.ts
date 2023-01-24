import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { SaleDto } from './interfaces/sale.interface';
import { SaleService } from './sale.service'

@Controller('sale')
export class SaleController {
     constructor(private saleService: SaleService) { }

     @Post()
     async createSale(@Body() body: SaleDto) {
          return await this.saleService.createSale(body)
     }

     @Get()
     async getAllSales() {
          return await this.saleService.getAllSales()
     }

     @Get(':id')
     async getOneSale(@Param('id') id: string) {
          return await this.saleService.getOneSale(id)
     }

     @Put(':id')
     async UpdateSale(@Param('id') id: string, @Body(new ValidationPipe()) body: SaleDto) {
          return await this.saleService.UpdateSale(id, body)
     }

     @Delete(':id')
     async VoidSale(@Param('id') id: string) {
          return await this.saleService.VoidSale(id)
     }


}
