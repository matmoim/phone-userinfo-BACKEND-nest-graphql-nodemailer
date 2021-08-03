import { MailerService } from '@nestjs-modules/mailer';
import { Resolver,Query, Mutation } from '@nestjs/graphql';
import { PhoneNumber } from './phone-number.ot';
import { PhoneNumberService } from './phone-number.service';


@Resolver(of => PhoneNumber)
export class PhoneNumberResolver {
  constructor(
    private phoneNumberService: PhoneNumberService,
    private mailerService: MailerService
  ) { }
  @Mutation (returns => [PhoneNumber])
  async test(): Promise<string> {
    try {
      await this.mailerService
      .sendMail({
        to: `mathewnodejs@gmail.com`,
        from: 'Info Sure-Lock-Key <system@surelockkey.com>',
        subject: 'New client from SureLock-n-Key LLC',
        text: 'Contact',
        html: '<obj>PhoneNumber</obj>',
        
      })
      // .catch((err) => {
      //   throw err;
      // });
      
      return 'Done'

    } catch (error) {
      console.log(error);
    }
  }
}

// @Resolver(of => PhoneNumber)
//   export class PhoneNumberResolver{
//     constructor(private phoneNumberService: PhoneNumberService) {
//     }

// @Query(returns => [PhoneNumber])
// phonenumber(): Promise<PhoneNumber[]>{
//   return this.phoneNumberService.findAll()
// }
//   
