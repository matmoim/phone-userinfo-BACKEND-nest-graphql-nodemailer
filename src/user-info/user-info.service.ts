import { Injectable } from '@nestjs/common';
import { UserInfo } from './user-info.ot';


@Injectable()
export class UserInfoService {
  async findAll(): Promise<UserInfo[]>{
    const userinfo = new UserInfo();
    userinfo.phone 
    userinfo.name 
    userinfo.phone 
    userinfo.email 
    userinfo.address 


    return [userinfo];
    
  }

}