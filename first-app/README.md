# Learn nestjs

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
# generate a module named users
nest g module users

# generate controller users
nest g controller users

# generate service users
nest g service users
```

## Insatll swagger for automated docs

```bash
npm i @nestjs/swagger swagger-ui-express
```
