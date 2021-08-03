import { Field, InputType,Entity } from "@nestjs/graphql";
@Entity()
@InputType()
export class PhoneNumber{
  @Field(() => Number, {nullable :true})
    number:number;
    }

