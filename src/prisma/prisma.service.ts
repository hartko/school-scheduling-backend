// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import PrismaPaginate from 'prisma-paginate';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL as string,
      ssl: { rejectUnauthorized: false },
    });
    const adapter = new PrismaPg(pool);

    super({
      adapter, // pass the instantiated adapter
      log: ['query', 'info', 'warn', 'error'],
    });
     this.$extends(PrismaPaginate);

  }

  async onModuleInit() {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is missing from environment');
    }
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}