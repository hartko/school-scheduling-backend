import { IsString, IsBoolean, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ScheduleDto {
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

export class CreateScheduleDto {

    @ApiProperty({ description: 'Schedule name', example: 'Morning Session' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'Schedule description', example: 'Morning session schedule' })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({ description: 'Schedule details' })
    @IsNotEmpty()
    schedule: ScheduleDto[];

    @ApiProperty({ description: 'Unique schedule code', example: 'SCH-ABC123' })
    @IsString()
    @IsOptional()
    schedule_code?: string;

}
