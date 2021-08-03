import { MailerService } from '@nestjs-modules/mailer';
import { Resolver, Query } from '@nestjs/graphql';
import { UserInfo } from './user-info.ot';
import { UserInfoService } from './user-info.service'


@Resolver(of => UserInfo)
export class UserInfoResolver {
  constructor(
    private userinfoService: UserInfoService,
    private mailerService: MailerService
  ) { }

  @Query(returns => [UserInfo])
  userInfo(): Promise<UserInfo[]> {
    return this.userinfoService.findAll()
  }

  // @Query(returns => ['yes'])
  // async test() {
  //   try {
  //     await this.mailerService.sendMail({
  //       to: 'mathewnodejs@gmail.com',
  //       raw: 'Hello',
        
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
