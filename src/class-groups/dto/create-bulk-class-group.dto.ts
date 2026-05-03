import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateClassGroupDto } from './create-class-group.dto';

export class CreateBulkClassGroupDto {
    @ApiProperty({ type: [CreateClassGroupDto], description: 'Array of class groups to create' })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateClassGroupDto)
    items: CreateClassGroupDto[];
}
