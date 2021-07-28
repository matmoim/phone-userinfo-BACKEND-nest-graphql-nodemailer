import { Module } from '@nestjs/common';
import { UserInfoResolver } from './user-info.resolver';
import { UserInfoService } from './user-info.service';

@Module({ 
  providers: [UserInfoService, UserInfoResolver]
})
export class UserInfoModule {}
