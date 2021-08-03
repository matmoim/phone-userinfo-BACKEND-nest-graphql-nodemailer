import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export default {
  mail: {
    properties: {
      useFactory: () => ({transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'matvii.moiseienko@surelockkey.com',
          pass: 'G5@ZaopT8UjS42qihX',
        },
        defaults: {
          from: `"Back-End" <matvii.moiseienko@surelockkey.com>`,
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
