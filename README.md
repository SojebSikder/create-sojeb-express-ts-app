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

A productive Boilerplate to create new Express typescript project.

## Example :

https://github.com/SojebSikder/nodejs-ecommerce

# Getting started

## Creating a new app

Using yarn :

```
yarn create sojeb-express-ts-app hello-world
```

Try changing `example.controller.ts` file in app directory.

```typescript
@Controller()
export class ExampleController {
  @Get("", { middleware: [decorateHtmlResponse()] })
  index(req: Request, res: Response) {
    res.render("index");
  }
}
```

## Configure

- Set up database credentials in env file
- Migrate database using this command:
  `yarn prisma migrate dev`

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

---

## Table of contents (incomplete docs)

- [Overview](#overview)
  - [Controllers](#controllers)
  - Services
  - Modules
- [Techniques](#techniques)
  - [Storage](#storage)
    - [local](#local)
    - [aws s3](#aws-s3)
  - Database
    - Prisma
    - Redis
    - Sorm (extra)
  - [Mail](#mail)
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
  index(req: Request, res: Response) {
    res.send("Hello world");
  }
}
```

> HINT: To create a controller using the CLI, simply execute the `yarn cmd make:controller example` command.

# Techniques

# Storage

## local

We need to config first to use Local storage

```typescript
import { Storage } from "../../system/src";
import { Module } from "../../system/src/core/decorator";
import { ExampleController } from "./example/example.controller";

@Module({
  imports: [
    Storage.config({
      driver: "local",
      connection: {
        // Set public directory here
        rootUrl: "public",
      },
    }),
  ],
  controllers: [ExampleController],
})
export class AppModule {}
```

And we are ready to upload files to s3 bucket.
To upload files, here is the basic example:

```typescript
  // import { Storage } from "../../../system/src";
  public async upload() {
    await Storage.put("sojebdemo/test.txt", "Hello world");
  }
```

We can get url from bucket using `Storage.url('fileName')`.

```typescript
  // import { Storage } from "../../../system/src";
  public async getFileUrl() {
    return Storage.url("sojebdemo/test.txt");
  }
```

If we want to read files:

```typescript
  // import { Storage } from "../../../system/src";
  public async getFile() {
 return Storage.get("sojebdemo/test.txt");
  }
```

Now If we want to delete files:

```typescript
  // import { Storage } from "../../../system/src";
  public deleteFile() {
    return Storage.delete("sojebdemo/test.txt");
  }
```

## aws s3

To use aws S3 first we need to config in `app.module.ts`:

```typescript
import { Storage } from "../../system/src";
import { Module } from "../../system/src/core/decorator";
import { ExampleController } from "./example/example.controller";

@Module({
  imports: [
    Storage.config({
      driver: "s3",
      connection: {
        awsAccessKeyId: "...",
        awsSecretAccessKey: "...",
        awsBucket: "...",
        awsDefaultRegion: "ap-southeast-1",
      },
    }),
  ],
  controllers: [ExampleController],
})
export class AppModule {}
```

And we are ready to upload files to S3 bucket.
To upload files:

```typescript
  // import { Storage } from "../../../system/src";
  public async upload() {
    await Storage.put("sojebdemo/test.txt", "Hello world");
  }
```

We can get url from bucket using `Storage.url('fileName')`.

```typescript
  // import { Storage } from "../../../system/src";
  public async getFileUrl() {
    return Storage.url("sojebdemo/test.txt");
  }
```

If we want to read files from S3 we have to use S3Adapter. And pass Storage config in S3Adapter constructor.

```typescript
  // import { Storage } from "../../../system/src";
  // import { S3Adapter } from "../../../system/src/core/Disk/drivers/S3Adapter";
  public async getFile() {
    const s3Adapter = await new S3Adapter(Storage.getConfig()).get(
      "sojebdemo/test.txt"
    );

    s3Adapter.on("data", function (data) {
      console.log(data.toString());
    });
  }
```

Now If we want to delete files from S3 we can use Storage class again.

```typescript
  // import { Storage } from "../../../system/src";
  public deleteFile() {
    return Storage.delete("sojebdemo/test.txt");
  }
```

## Mail

For sending email, nodemailer used under the hood.
So first config Mail in `app.module.ts`.
Change the app.module.ts like this:

```typescript
import { env, Mail } from "../../system/src";
import { Module } from "../../system/src/core/decorator";
import { ExampleController } from "./example/example.controller";

@Module({
  imports: [
    Mail.config({
      connection: {
        host: env("MAIL_HOST"),
        from: {
          address: env("MAIL_FROM_ADDRESS", "hello@example.com"),
        },
        secure: false,
        port: env("MAIL_PORT", 587),
        username: env("MAIL_USERNAME"),
        password: env("MAIL_PASSWORD"),
      },
    }),
  ],
  controllers: [ExampleController],
})
export class AppModule {}
```

Now to send a basic email we can do like this:

```typescript
  /**
   * send mail
   */
  public async sendMail() {
    Mail.to("example@example.com").body("Hello world").send();
  }
```

# CLI

## Overview

We can automate process using cmd cli.

- generate controller and service together: `yarn cmd make:module Blog`
- generate only controller: `yarn cmd make:controller Blog`
- generate only service: `yarn cmd make:service Blog`
- To see all available commands: `yarn cmd list`

# Technology used

- Typescript
- Node.js
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
  `yarn prisma migrate dev`

## For help and support

Email: sojebsikder@gmail.com

## Issue

If you find any problem please create an issue.
