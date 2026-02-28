import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateTeacherDto {
    @ApiProperty({ description: 'Teacher first name' })
    @IsString()
    first_name: string;

    @ApiProperty({ description: 'Teacher last name' })
    @IsString()
    last_name: string;

    @ApiPropertyOptional({ description: 'Teacher middle name' })
    @IsString()
    middle_name?: string;

    @ApiPropertyOptional({ description: 'Unique teacher code' })
    @IsString()
    teacher_code?: string;

    @ApiPropertyOptional({ description: 'Teacher email address' })
    @IsEmail()
    email?: string;
}