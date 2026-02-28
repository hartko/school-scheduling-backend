import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty } from 'class-validator';

export class CreateRoomScheduleDto {
    @ApiProperty({
        description: 'The ID of the room',
        type: Number,
    })
    @IsNotEmpty()
    room_id: number;

    @ApiProperty({
        description: 'The ID of the schedule',
        type: Number,
    })
    @IsNotEmpty()
    schedule_id: number;
}
