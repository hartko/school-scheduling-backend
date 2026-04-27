import { IsInt, IsOptional, Min } from 'class-validator';

export class CreateSectionSubjectDto {
  @IsInt()
  @Min(1)
  section_id: number;

  @IsInt()
  @Min(1)
  subject_id: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  units?: number;
}
