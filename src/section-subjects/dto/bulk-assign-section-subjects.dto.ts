import { Type } from 'class-transformer';
import { IsArray, IsInt, IsOptional, Min, ValidateNested } from 'class-validator';

export class SubjectAssignmentDto {
  @IsInt()
  @Min(1)
  subject_id: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  units?: number;
}

export class BulkAssignSectionSubjectsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubjectAssignmentDto)
  assignments: SubjectAssignmentDto[];
}
