// src/common/pagination/pagination.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PaginationService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Generic pagination function for any Prisma model
   * @param model - Prisma model delegate, e.g., prisma.section
   * @param page - page number
   * @param limit - items per page
   * @param orderBy - optional ordering
   * @param where - optional filtering
   */
  async paginate(model: any, page = 1, limit = 10, orderBy: any = {}, where: any = {}, distinct?: string[]) {
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      model.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        ...(distinct && { distinct }),
      }),
      model.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data: items,
      pagination: {
        totalItems: total,
        itemCount: items.length,
        itemsPerPage: limit,
        totalPages,
        currentPage: page,
      },
    };
  }
}