import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PhoneNumber{
  @Field({nullable :true})
    number:number;
    }

