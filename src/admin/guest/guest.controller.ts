import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { GuestService } from './guest.service';

@Controller('admin/guest')
export class GuestController {
  constructor(private guestService: GuestService) {}

  @Post()
  async createGuest(@Body() body) {
    return await this.guestService.createGuest(body);
  }

  @Get()
  async getAllGuests() {
    return await this.guestService.getAllGuests();
  }

  @Get(':id')
  async getGuest(@Param('id') id: string) {
    return await this.guestService.getGuest(id);
  }

  @Put(':id')
  async updateGuest(@Param('id') id: string, @Body() body) {
    return await this.guestService.updateGuest(id, body);
  }

  @Delete(':id')
  async deleteGuest(@Param('id') id: string) {
    return await this.guestService.deleteGuest(id);
  }
}
