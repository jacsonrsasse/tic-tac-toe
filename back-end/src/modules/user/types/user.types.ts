import { DtoToType } from '@utils/dto-to-type.util';
import { CreateUserDto } from '../dto/create-user.dto';
import { DeleteUserDto } from '../dto/delete-user.dto';

export type CreateUser = DtoToType<CreateUserDto>;

export type DeleteUser = DtoToType<DeleteUserDto>;
