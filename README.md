# create-express-ts-app

Boilerplate to create a new Express typescript project

Note: I didn't focus on front-end much.

## Installing

```
yarn install
```

## Setup

- Copy .env.example to .env And set up database credentials in env file
- run this command for database migration:
  `npx prisma db push`
- Migrate database using this command:
  `npx prisma migrate dev`

## Running

```
ts-node app.ts
```

## For development

Run this command
```
yarn watch
```

Or Install nodemon globally

```
yarn global add nodemon
```

Then run using this nodemon

```
nodemon app.ts
```

## Technology used

- Typescript
- Nodejs
- Express
- Prisma
- Mysql

## For help and support

Email: sojebsikder@gmail.com

## Issue

If you find any problem please create an issue.
