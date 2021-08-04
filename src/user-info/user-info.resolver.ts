import { MailerService } from '@nestjs-modules/mailer';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserInfoService } from './user-info.service'



@Resolver()
export class UserInfoResolver {
  constructor(
    private userinfoService: UserInfoService,
    private mailerService: MailerService
  ) { }


  @Query(() => String)
  test1(): string {
    return 'aaa'
  }


  @Mutation(() => String)
  async test(
    @Args('phone', { type: () => Number }) phone: number,
    @Args('name', { type: () => String }) date: string,
    @Args('address', { type: () => String }) address: string,
    @Args('email', { type: () => String }) email: string,
    @Args('name', { type: () => String }) name: string,
  ): Promise<string> {
    try {
      await this.mailerService
        .sendMail({
          to: `//write gmail to`,
          from: 'Info Sure-Lock-Key <//write gmail from>',
          subject: 'New client from SureLock-n-Key LLC',
          text: 'Contact',
          html: `<obj>UserInfo ${phone}</obj>`,
        })


      return 'Done'

    } catch (error) {
      console.log(error);
    }
  }
}
