## Sample Prisma Project

This sample `Prisma` project is using `Typescript` and the `Prisma Schema language` to define and manipulate a `Postgres` database hosted in a `Docker container`.

### Supported Operations

* CRUD operations for `User`, `Post`, `UserPreference` and `Category`

### install command

* `npm install`, `yarn install` or `pnpm install`

### dev command

use `npm run dev` to run queries defined in the `src/index.ts` file with dynamic reloading of the nodemon server on save.

### build command

use `npm run build`. The generated build can be found in the `./dist` folder.

### start command

use `npm start` to run queries defined in the `src/index.ts` file without server reloads on save.

Note: You need to add a `.env` file in the project route with `POSTGRES_PASSWORD`, `POSTGRES_USER`, `POSTGRES_DB defined`.
