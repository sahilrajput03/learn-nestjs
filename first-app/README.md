# Learn nestjs

Refer `README-original.md` for origianl readme created withe nest cli tool on the project initialization.

# TODO:

Start doing from [this timestamp](https://youtu.be/2n3xS89TJMI?t=2219).

Source: https://youtu.be/2n3xS89TJMI

`nestjs` is just an abstraction layer above expressjs.

```bash
# install nest cli globally
sudo npm i -g @nestjs/cli

# create new project with nest
nest new first-app

# start in dev mode
cd first-app/
npm run start:debug # debug
npm run start:dev 	# dev
npm run start 		# prod
```

Other Utility commands

```bash
# generate module named `users` @ /src/users/users.module.ts    (Also: Updates /src/app.module.ts)
nest g module users

# generate controller named `users` @ /src/users/users.controller.ts and test file @ /src/users/users.controller.spec.ts   (Also: Updates /src/users/users.module.ts)
nest g controller users

# generate service named `users` @ /src/users/users.service.ts and a test file @ /src/users/users.service.spec.ts   (Also: Updates /src/users/users.module.ts)
nest g service users
```

## Insatll swagger for automated docs

```bash
npm i @nestjs/swagger swagger-ui-express
```
