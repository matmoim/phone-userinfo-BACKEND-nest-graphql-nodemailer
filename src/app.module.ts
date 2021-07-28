import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhoneController } from './phone/phone.controller';
import { UserController } from './user/user.controller';
import { PetsModule } from './pets/pets.module';
import { join } from 'path/posix';
import { PhoneNumberModule } from './phone-number/phone-number.module';
import { UserInfoModule } from './user-info/user-info.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
  }),
  PetsModule,
  PhoneNumberModule,
  UserInfoModule,],
  controllers: [AppController, PhoneController, UserController],
  providers: [AppService],
})
export class AppModule {}
