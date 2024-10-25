# int
cd api
npm init -y 
-2 extensions: prisma, console-ninja(nodemon alt. by Lamadev)
# dependencies
npm i express 
npm i bcrypt // to hash the passwords
npm i @prisma/client
npx prisma init --datasource-provider mongodb
npm i cookie-parser
npm i jsonwebtoken
npm i cors
-Everytime we make changes in prisma.js(stores model schemas) - run cmd >npx prisma db push
-If port busy,kill process on it >fuser -n tcp -k 9000
- to generate secret key fr jwt token >openssl rand -base64 32
-need to pass env file as flag fr env file to be accessible n rerun the app using > console-ninja node --env-file .env --watch app.js
# run
console-ninja node --watch app.js
# 