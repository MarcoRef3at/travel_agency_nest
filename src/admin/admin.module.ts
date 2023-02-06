import { Module } from '@nestjs/common';
import { HotelService } from './hotel/hotel.service';
import { GuestService } from './guest/guest.service';
import { AgencyService } from './agency/agency.service';
import { AgencyController } from './agency/agency.controller';
import { GuestController } from './guest/guest.controller';
import { HotelController } from './hotel/hotel.controller';

@Module({
  controllers: [AgencyController, GuestController, HotelController],
  providers: [HotelService, GuestService, AgencyService],
})
export class AdminModule {}
