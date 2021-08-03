import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class UserInfo{

  @Field(()=> Number, {nullable :true})
    phone:number;
    @Field(()=> String, {nullable :true})
    name:string;
    @Field(()=> String, {nullable :true})
    email:string;
    @Field(()=> String, {nullable :true})
    address:string;
    @Field(()=> String, {nullable :true})
    date:string;
  }
