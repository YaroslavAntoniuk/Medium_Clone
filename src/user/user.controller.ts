import { User } from '@app/user/decorators/user.decorator';
import { CreateUserDto } from '@app/user/dto/create-user.dto';
import { LoginUserDto } from '@app/user/dto/login-user.dto';
import { IUserResponse } from '@app/user/types/userResponse.interface';
import { UserEntity } from '@app/user/user.entity';
import { UserService } from '@app/user/user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('api/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.createUser(createUserDto);

    return this.userService.mapUserResponse(user);
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async login(
    @Body('user') loginUserDto: LoginUserDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.login(loginUserDto);

    return this.userService.mapUserResponse(user);
  }

  @Get('user')
  async currentUser(@User() user: UserEntity): Promise<IUserResponse> {
    return this.userService.mapUserResponse(user);
  }
}
