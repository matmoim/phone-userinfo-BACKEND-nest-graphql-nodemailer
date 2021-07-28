import { Injectable } from '@nestjs/common';
import { UserInfo } from './user-info.entity';


@Injectable()
export class UserInfoService {
  async findAll(): Promise<UserInfo[]>{
    const userinfo = new UserInfo();
    userinfo.phone = 1;
    userinfo.name = 'Donald';
    userinfo.email = 'usa@usa';
    userinfo.date = new Date('July 4,1994 04:44:44');

    return [userinfo];
    
  }

}