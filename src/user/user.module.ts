import { UserController } from '@app/user/user.controller';
import { UserService } from '@app/user/user.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
