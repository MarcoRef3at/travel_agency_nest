import { Injectable, BadRequestException } from '@nestjs/common';
import { Agency } from 'models';

@Injectable()
export class AgencyService {
  async createAgency(body) {
    try {
      return await Agency.create(body);
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async getAgency(id) {
    try {
      return await Agency.findByPk(id);
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async getAllAgencys() {
    try {
      return await Agency.findAll();
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async updateAgency(id, body) {
    try {
      return await Agency.update(body, { where: { id } });
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async deleteAgency(id) {
    try {
      return await Agency.destroy({ where: { id } });
    } catch (error) {
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }
}
