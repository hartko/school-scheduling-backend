import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTeacherSubjectDto {
    @ApiProperty({
        description: 'The ID of the teacher'
    })
    @IsNumber()
    teacher_id: number;

    @ApiProperty({
        description: 'The ID of the subject'    })
    @IsNumber()
    subject_id: number;
}
