import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export default {
  mongoURI: `mongodb+srv://pol-admin:uK3FNQDrUMRjr2uE@slk-website.kbvwn.mongodb.net/web-slk-db?retryWrites=true&w=majority`,
  mail: {
    properties: {
      useFactory: () => ({transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'system@surelockkey.com',
          pass: 'G5@ZaopT8UjS42qihX',
        },
        defaults: {
          from: `"Back-End" <system@surelockkey.com>`,
        },
        template: {
          dir: process.cwd() + '/templates/',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }}),
    }
  }
}