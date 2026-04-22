import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Min, Max, IsNumber } from 'class-validator';

export class CreateRoomDto {
    @ApiProperty({
        description: 'Room name',
        example: 'Room A1',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'Room capacity',
        example: 30,
        minimum: 1,
        maximum: 500,
    })
    @IsNumber()
    @Min(1)
    @Max(500)
    capacity?: number;

    @ApiProperty({
        description: 'Room level/floor',
        example: 'Ground Floor',
    })
    @IsNumber()
    level?: number;
}
