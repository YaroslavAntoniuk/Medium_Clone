import { JWT_SECRET } from '@app/config';
import { CreateUserDto } from '@app/user/dto/create-user.dto';
import { IUserResponse } from '@app/user/types/userResponse.interface';
import { UserEntity } from '@app/user/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sign } from 'jsonwebtoken';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);

    return this.userRepository.save(newUser);
  }

  private generateJwt(user: UserEntity): string {
    return sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      JWT_SECRET,
    );
  }

  mapUserResponse(user: UserEntity): IUserResponse {
    return {
      user: {
        ...user,
        token: this.generateJwt(user),
      },
    };
  }
}
