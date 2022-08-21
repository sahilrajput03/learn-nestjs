import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): User[];
    getUserById(id: string): User;
    createUser(body: CreateUserDto): User;
}
