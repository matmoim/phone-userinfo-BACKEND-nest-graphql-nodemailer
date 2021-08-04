import { MailerService } from '@nestjs-modules/mailer';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PhoneNumber } from './phone-number.ot';
import { PhoneNumberService } from './phone-number.service';


@Resolver()
export class PhoneNumberResolver {
  constructor(
    private phoneNumberService: PhoneNumberService,
    private mailerService: MailerService
  ) { }
  @Mutation(() => String)
  async phonenumber(
    @Args('phone', {type: () => Int }) phone: number
  ): Promise<string> {
    try {
      await this.mailerService
        .sendMail({
          to: `mathewnodejs@gmail.com`,
          from: 'Info Sure-Lock-Key <system@surelockkey.com>',
          subject: 'New client from SureLock-n-Key LLC',
          text: 'Contact',
          html: `<obj>Phone Number of User : ${phone}</obj>`,

        })
  
      return 'Done! =)'

    } catch (error) {
      console.log(error);
    }
  }
}
