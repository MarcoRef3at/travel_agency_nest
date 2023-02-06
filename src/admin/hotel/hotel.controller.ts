import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { HotelService } from './hotel.service';

@Controller('admin/hotel')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Post()
  async createHotel(@Body() body) {
    return await this.hotelService.createHotel(body);
  }

  @Get()
  async getAllHotels() {
    return await this.hotelService.getAllHotels();
  }

  @Get(':id')
  async getHotel(@Param('id') id: string) {
    return await this.hotelService.getHotel(id);
  }

  @Put(':id')
  async updateHotel(@Param('id') id: string, @Body() body) {
    return await this.hotelService.updateHotel(id, body);
  }

  @Delete(':id')
  async deleteHotel(@Param('id') id: string) {
    return await this.hotelService.deleteHotel(id);
  }
}
