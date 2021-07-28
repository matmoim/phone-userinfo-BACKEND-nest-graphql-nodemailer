import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PhoneNumber{
  @Field()
  phone:number;
}