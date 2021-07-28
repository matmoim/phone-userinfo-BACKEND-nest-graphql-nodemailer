import { Resolver,Query } from '@nestjs/graphql';
import { PhoneNumber } from './phone-number.entity';
import { PhoneNumberService } from './phone-number.service';


@Resolver(of => PhoneNumber)
  export class PhoneNumberResolver{
    constructor(private phoneNumberService: PhoneNumberService) {}

@Query(returns => PhoneNumber)
phonenumber(): Promise<PhoneNumber[]>{
  return this.phoneNumberService.findAll()
}
  }