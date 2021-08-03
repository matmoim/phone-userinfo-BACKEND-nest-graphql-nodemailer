import { MailerService } from '@nestjs-modules/mailer';
import { Resolver,Query } from '@nestjs/graphql';
import { PhoneNumber } from './phone-number.ot';
import { PhoneNumberService } from './phone-number.service';


@Resolver(of => PhoneNumber)
export class PhoneNumberResolver {
  constructor(
    private userinfoService: PhoneNumberService,
    private mailerService: MailerService
  ) { }
// @Resolver(of => PhoneNumber)
//   export class PhoneNumberResolver{
//     constructor(private phoneNumberService: PhoneNumberService) {
//     }

// @Query(returns => [PhoneNumber])
// phonenumber(): Promise<PhoneNumber[]>{
//   return this.phoneNumberService.findAll()
// }
//   
}