import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { join } from 'path/posix';
import { PhoneNumberModule } from './phone-number/phone-number.module';
import { UserInfoModule } from './user-info/user-info.module';
import { MailerModule } from '@nestjs-modules/mailer';
import config from './Config/keys';

@Module({
  imports: [
    MailerModule.forRootAsync(config.mail.properties),
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
  }),
  PhoneNumberModule, 
  UserInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
