import { Injectable } from '@nestjs/common';
import { PhoneNumber } from './phone-number.entity';


@Injectable()
export class PhoneNumberService {
  async findAll(): Promise<PhoneNumber[]>{
    const phonenumber = new PhoneNumber();
    phonenumber.phone = 1;

    return [phonenumber];
    
  }

}