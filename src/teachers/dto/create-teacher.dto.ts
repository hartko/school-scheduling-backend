import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateTeacherDto {
    @ApiProperty({ description: 'Teacher first name' })
    @IsString()
    first_name: string;

    @ApiProperty({ description: 'Teacher last name' })
    @IsString()
    last_name: string;

    @ApiPropertyOptional({ description: 'Teacher middle name' })
    @IsString()
    @IsOptional()
    middle_name?: string;

    @ApiPropertyOptional({ description: 'Unique teacher code' })
    @IsString()
    @IsOptional()
    teacher_code?: string;

    @ApiPropertyOptional({ description: 'Teacher email address' })
    @IsEmail()
    @IsOptional()
    email?: string;
}