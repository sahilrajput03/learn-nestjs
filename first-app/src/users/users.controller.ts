import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

// handles traffic at /users/* path
@ApiTags('users')
@Controller('users')
export class UsersController {
  // Dependency injection with constructor
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    // TODO: Learn pipe to mould data in nestjs.
    return this.usersService.findById(Number(id));
  }

  // dto: data transfer object
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
