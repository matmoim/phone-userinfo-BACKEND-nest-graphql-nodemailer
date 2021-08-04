import { Field, InputType, } from "@nestjs/graphql";

@InputType()
export class PhoneNumber {
  @Field(() => Number, { nullable: true })
  number: number;
}

