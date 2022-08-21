import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false }) // unfortunately swagger can't automatically detect  optional typescript values
  age?: number;
}
