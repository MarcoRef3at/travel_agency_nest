import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AgencyService } from './agency.service';

@Controller('admin/agency')
export class AgencyController {
  constructor(private agencyService: AgencyService) {}

  @Post()
  async createAgency(@Body() body) {
    return await this.agencyService.createAgency(body);
  }

  @Get()
  async getAllAgencys() {
    return await this.agencyService.getAllAgencys();
  }

  @Get(':id')
  async getAgency(@Param('id') id: string) {
    return await this.agencyService.getAgency(id);
  }

  @Put(':id')
  async updateAgency(@Param('id') id: string, @Body() body) {
    return await this.agencyService.updateAgency(id, body);
  }

  @Delete(':id')
  async deleteAgency(@Param('id') id: string) {
    return await this.agencyService.deleteAgency(id);
  }
}
