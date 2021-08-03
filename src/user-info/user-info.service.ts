import { Injectable } from '@nestjs/common';
import { UserInfo } from './user-info.ot';


@Injectable()
export class UserInfoService {
  async findAll(): Promise<UserInfo[]>{
    const userinfo = new UserInfo();
    userinfo.phone = 14;
    userinfo.name = 'Ivan';
    userinfo.phone = 2929292929;
    userinfo.email = 'email@gmail.com';
    userinfo.address = 'NY' 


    return [userinfo];
    
  }

}