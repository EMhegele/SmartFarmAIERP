import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.organization.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.organization.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}