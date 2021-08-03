import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class UserInfo{

  @Field(()=> Number, {nullable :true})
    phone:number;
    @Field({nullable :true})
    name:string;
    @Field({nullable :true})
    email:string;
    @Field({nullable :true})
    address:string;
    @Field({nullable :true})
    date:string;
  }
