import { Resolver,Query } from '@nestjs/graphql';
import { UserInfo } from './user-info.entity';
import { UserInfoService } from './user-info.service'


@Resolver(of => UserInfo)
  export class UserInfoResolver{
    constructor(private UserInfoService: UserInfoService) {}

@Query(returns => UserInfo)
UserInfo(): Promise<UserInfo[]>{
  return this.UserInfoService.findAll()
}
  }