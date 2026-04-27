import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateClassGroupDto {
    @ApiProperty({ description: 'The ID of the section', example: 1 })
    @IsNotEmpty()
    @IsInt()
    section_id: number;

    @ApiProperty({ description: 'The ID of the teacher subject', example: 1 })
    @IsNotEmpty()
    @IsInt()
    teacher_subject_id: number;

    @ApiProperty({ description: 'The ID of the room schedule', example: 1 })
    @IsNotEmpty()
    @IsInt()
    room_schedule_id: number;

    @ApiProperty({ description: 'The specific schedule time slot assigned by the solver', example: 5, required: false })
    @IsOptional()
    @IsInt()
    schedule_time_id?: number;
}
