import { IsString, IsBoolean, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
    @ApiProperty({ description: 'Start time', example: '09:00' })
    @IsString()
    @IsNotEmpty()
    start_time: string;

    @ApiProperty({ description: 'End time', example: '10:00' })
    @IsString()
    @IsNotEmpty()
    end_time: string;

    @ApiProperty({ description: 'Is break period', example: true })
    @IsBoolean()
    @IsOptional()
    is_break?: boolean;

    @ApiProperty({ description: 'Day of week', example: 1 })
    @IsNumber()
    @IsNotEmpty()
    day: number;
}
