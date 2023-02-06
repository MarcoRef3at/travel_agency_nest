import { Injectable, BadRequestException } from '@nestjs/common';
import { Hotel } from 'models';

@Injectable()
export class HotelService {
  async createHotel(body) {
    try {
      return await Hotel.create(body);
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async getHotel(id) {
    try {
      return await Hotel.findByPk(id);
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async getAllHotels() {
    try {
      return await Hotel.findAll();
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async updateHotel(id, body) {
    try {
      return await Hotel.update(body, { where: { id } });
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async deleteHotel(id) {
    try {
      return await Hotel.destroy({ where: { id } });
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }
}
