import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSectionSubjectDto } from './dto/create-section-subject.dto';
import { BulkAssignSectionSubjectsDto } from './dto/bulk-assign-section-subjects.dto';

@Injectable()
export class SectionSubjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.sectionSubject.findMany({ include: { subject: true } });
  }

  async findBySectionId(sectionId: number) {
    return this.prisma.sectionSubject.findMany({
      where: { section_id: sectionId },
      include: { subject: true },
    });
  }

  async create(dto: CreateSectionSubjectDto) {
    const existing = await this.prisma.sectionSubject.findUnique({
      where: { section_id_subject_id: { section_id: dto.section_id, subject_id: dto.subject_id } },
    });
    if (existing) throw new ConflictException('Subject already assigned to this section.');
    return this.prisma.sectionSubject.create({ data: dto, include: { subject: true } });
  }

  async bulkAssign(sectionId: number, dto: BulkAssignSectionSubjectsDto) {
    await this.prisma.sectionSubject.deleteMany({ where: { section_id: sectionId } });
    const data = dto.assignments.map(({ subject_id, units }) => ({ section_id: sectionId, subject_id, units }));
    await this.prisma.sectionSubject.createMany({ data, skipDuplicates: true });
    return this.findBySectionId(sectionId);
  }

  async remove(id: number) {
    const record = await this.prisma.sectionSubject.findUnique({ where: { id } });
    if (!record) throw new NotFoundException(`SectionSubject #${id} not found.`);
    return this.prisma.sectionSubject.delete({ where: { id } });
  }
}
