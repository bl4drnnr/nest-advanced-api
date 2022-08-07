<span align="center">
  <h1>NEST.JS Advanced API</h1>
</span>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

`NEST.JS` advanced API with login, registration system, ACL and availability of banning user.

This API is divided by 4 modules - `Auth`, `Ban`, `Roles`, `Users`. Auth module is used for login and registration normally, 
but in user module there is service that allows to create user directly. Used for test purposes. 
Every user by default has `USER` role, only user with `ADMIN` role can ban other users or give them roles.

ACL had been implemented with `role.decorator` and `role.guard` and allows to restrict access to endpoint.

The other guard is `auth.guard`, that checks if user is logged in and can get access to resource.

Validation pipe is user to verify input data.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

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

## License

Nest is [MIT licensed](LICENSE).
