import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from '../common/pagination/pagination.service';

@Injectable()
export class SectionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paginationService: PaginationService) {
  }

  create(createSectionDto: CreateSectionDto) {
    return this.prisma.section.create({
      data: createSectionDto,
    });
  }

  findAll(page = 1, limit = 10, search?: string, sortBy: string = 'name', sortOrder: 'asc' | 'desc' = 'asc') {
    const where = search ? { name: { contains: search, mode: 'insensitive' } } : {};
    return this.paginationService.paginate(
      this.prisma.section,
      page,
      limit,
      { [sortBy]: sortOrder },
      where
    );
  }

  findOne(id: number) {
    return this.prisma.section.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSectionDto: UpdateSectionDto) {
    return this.prisma.section.update({
      where: { id },
      data: updateSectionDto,
    });
  }

  remove(id: number) {
    return this.prisma.section.delete({
      where: { id },
    });
  }
}
