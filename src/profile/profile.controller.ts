import { User } from '@app/user/decorators/user.decorator';
import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { IProfileResponse } from './types/profileResponse.interface';

@Controller('api/profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Get(':username')
  async getProfile(
    @User('id') currentUserId: number,
    @Param('username') profileUsername: string,
  ): Promise<IProfileResponse> {
    const profile = await this.profileService.getProfile(
      currentUserId,
      profileUsername,
    );

    return this.profileService.mapProfileResponse(profile);
  }
}
