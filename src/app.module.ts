import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhoneController } from './phone/phone.controller';
import { UserController } from './user/user.controller';
import { PetsModule } from './pets/pets.module';
import { join } from 'path/posix';

@Module({
  imports: [
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
  }),
  PetsModule,],
  controllers: [AppController, PhoneController, UserController],
  providers: [AppService],
})
export class AppModule {}
