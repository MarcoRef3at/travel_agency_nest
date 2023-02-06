import { Injectable, BadRequestException } from '@nestjs/common';
import { Guest } from 'models';

@Injectable()
export class GuestService {
  async createGuest(body) {
    try {
      return await Guest.create(body);
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async getGuest(id) {
    try {
      return await Guest.findByPk(id);
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async getAllGuests() {
    try {
      return await Guest.findAll();
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async updateGuest(id, body) {
    try {
      return await Guest.update(body, { where: { id } });
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async deleteGuest(id) {
    try {
      return await Guest.destroy({ where: { id } });
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }
}
