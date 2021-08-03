import { Field, InputType, ObjectType } from "@nestjs/graphql";
@InputType()
export class PhoneNumber{
  @Field({nullable :true})
    number:number;
    }

