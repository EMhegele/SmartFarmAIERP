import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateFacilityDto } from './dto/create-facility.dto';

@Injectable()
export class FacilitiesService {
  constructor(
    private prisma: PrismaService,
  ) {}

  create(createFacilityDto: CreateFacilityDto) {
    return this.prisma.facility.create({
      data: {
        name: createFacilityDto.name,
        code: createFacilityDto.code,
        description: createFacilityDto.description,
        organizationId: createFacilityDto.organizationId,
      },
    });
  }


  findAll() {
    return this.prisma.facility.findMany({
      include: {
        organization: true,
      },
    });
  }


  findOne(id: string) {
    return this.prisma.facility.findUnique({
      where: {
        id,
      },
      include: {
        organization: true,
      },
    });
  }


  update(id: string, data: any) {
    return this.prisma.facility.update({
      where: {
        id,
      },
      data,
    });
  }


  remove(id: string) {
    return this.prisma.facility.delete({
      where: {
        id,
      },
    });
  }
}