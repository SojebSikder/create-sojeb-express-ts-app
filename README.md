<div align="center">
<img alt="npm" src="https://img.shields.io/npm/v/create-sojeb-express-ts-app/latest.svg?style=flat&logo=npm">
<img alt="npm" src="https://img.shields.io/npm/dm/create-sojeb-express-ts-app">
<img alt="npm" src="https://img.shields.io/npm/dy/create-sojeb-express-ts-app">
<img alt="npm" src="https://img.shields.io/badge/Typescript-294E80.svg?flat&logo=typescript">
<img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/create-sojeb-express-ts-app">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/sojebsikder/create-sojeb-express-ts-app">

</div>

<br />

# create-sojeb-express-ts-app

Boilerplate to create a new express typescript project

## Example :

https://github.com/SojebSikder/nodejs-ecommerce

# Getting started

## Creating a new app

Using yarn :

```
yarn create sojeb-express-ts-app hello-world
```

Checkout example.controller.ts file.

```typescript
@Controller()
export class ExampleController {
  @Get("", { middleware: [decorateHtmlResponse()] })
  async index(req: Request, res: Response) {
    res.render("index");
  }
}
```

## Configure

- Set up database credentials in env file
- Migrate database using this command:
  `npx prisma migrate dev`

## Installing

```
yarn install
```

## Production

- Build `yarn build`
- Running `yarn start:prod`

## Development

- Run: `yarn start`

- Watch changes: `yarn start:dev`

- Or Install nodemon globally: `yarn global add nodemon`. Then run using this: `nodemon app.ts`

---

## Table of contents (incomplete docs)

- [Overview](#overview)
  - [Controllers](#controllers)
  - Services
  - Modules
- Techniques
  - Storage
  - Database
    - Prisma
    - Redis
    - Sorm (extra)
  - Mail
  - Websocket
- [CLI](#cli)
  - [Overview](#overview-1)

---

# Overview

## Controllers

Controllers is used to handling requests and reponses.
We use classes and decorators to create basic controllers. Decorators associate classes with required metadata to create routing map.

## Routing

In following example we will we'll use the `@Controller()` decorator, which is required to define a basic controller. We'll specify an optional route path prefix of `example`. Using a path prefix in a `@Controller()` decorator allows us to easily group a set of related routes, and minimize repetitive code. For example, we may choose to group a set of routes that manage interactions with a customer entity under the route /customers. In that case, we could specify the path prefix customers in the `@Controller()` decorator so that we don't have to repeat that portion of the path for each route in the file.

```typescript
@Controller("/example/")
export class ExampleController {
  @Get()
  async index(req: Request, res: Response) {
    res.send("Hello world");
  }
}
```

> HINT: To create a controller using the CLI, simply execute the `yarn make:controller example` command.

# CLI

## Overview

We can automate process using cmd cli.

- generate controller and service together `yarn cmd make:module Blog`
- generate only controller `yarn cmd make:controller Blog`
- generate only service `yarn cmd make:service Blog`

# Technology used

- Typescript
- Nodejs
- Express
- Prisma
- Mysql
- redis
- Nodemailer
- Jest
- jwt
- graphql etc.

# Contribute

---

If you want to contribute fork the repo, create new branch and make pull request.

## Setup (Contributing)

If you clone this repo then you have to setup these things manually.

- Copy .env.example to .env And set up database credentials in env file
- Migrate database using this command:
  `npx prisma migrate dev`

## For help and support

Email: sojebsikder@gmail.com

## Issue

If you find any problem please create an issue.
