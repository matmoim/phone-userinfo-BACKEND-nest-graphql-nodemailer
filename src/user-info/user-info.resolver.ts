import { MailerService } from '@nestjs-modules/mailer';
import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { UserInfo } from './user-info.ot';
import { UserInfoService } from './user-info.service'



@Resolver(of => UserInfo)
export class UserInfoResolver {
  constructor(
    private userinfoService: UserInfoService,
    private mailerService: MailerService
  ) { }

  // @Query(returns => [UserInfo])
  // userInfo(): Promise<UserInfo[]> {
  //   return this.userinfoService.findAll()
  // }

  // @Query(() => String)
  // test1(): string {
  //   return 'aaa'
  // }


  // @Query(() => String)
  @Mutation (returns => [UserInfo])
  async test(): Promise<string> {
    try {
      await this.mailerService
      .sendMail({
        to: ` mathewnodejs@gmail.com`,
        from: 'Info Sure-Lock-Key <system@surelockkey.com>',
        subject: 'New client from SureLock-n-Key LLC',
        text: 'Contact',
        html: '<div>test</div>',
      })
      .catch((err) => {
        throw err;
      });
      
      return 'Done'

    } catch (error) {
      console.log(error);
    }
  }
}
