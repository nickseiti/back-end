

## Description

It's a simple WebNovel backend project that have as purpose to build a project with new frameworks

## Installation

```bash
$ npm install
```

# Database
To generate typescript module from your schema.prisma run the following command (remember to get permission to connect into your database)
```bash 
$ npx prisma generate
```
Then i run the following command to update the database with the latest collections versions
```bash 
$ npx prisma db push
```
If you want catch the collections from database use the following command
```bash 
$ npx prisma db pull
```
## Running the app

```bash
# development
$ npm start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Nicholas Seiti Handa
[![Linkedin](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&labelColor=blue&link=https://www.linkedin.com/in/nicholas-seiti-097a19187/)](https://www.linkedin.com/in/nicholas-seiti-097a19187/)

## License

Nest is [MIT licensed](LICENSE).
