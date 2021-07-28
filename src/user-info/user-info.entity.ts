import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserInfo{
  @Field()
    name: string;
  @Field()
    phone:number;
  @Field({nullable: true})
    email:string;
  @Field({nullable: true})
    address:string;
  @Field({nullable: true})
    date:Date;
}
