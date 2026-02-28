import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength, IsOptional } from 'class-validator';

export class CreateSubjectDto {
    @ApiProperty({
        description: 'Subject name',
        example: 'Mathematics',
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(100)
    name: string;

    @ApiProperty({
        description: 'Subject code',
        example: 'MATH101',
    })
    @IsString()
    @IsOptional()
    @MinLength(2)
    @MaxLength(20)
    code: string;
}
