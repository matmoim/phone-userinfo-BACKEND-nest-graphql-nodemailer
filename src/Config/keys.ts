import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export default {
  mail: {
    properties: {
      useFactory: () => ({transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'mathewnodejs@gmail.com',
          pass: '',
        },
        defaults: {
          from: `"Back-End" <mathewnodejs@gmail.com>`,
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
