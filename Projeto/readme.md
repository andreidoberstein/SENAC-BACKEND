# Subir servidor
```
npm init -y
```

```
npm i typescript nodemon ts-node dotenv express
```

```
npm i --save-dev @types/express
```

```
nano .gitignore
```
```
 node_modules
 .env
```

```
nano .env
```
```
 PORT = 3000
```

```
npx tsc --init
```

```
mkdir src
```

```
nano src/server.ts
```

```
 import express from 'express';
 import dotenv from 'dotenv';

 dotenv.config();
 const PORT = process.env.PORT || 1903;

 const app = express();

 app.listen(process.env.PORT, () => console.log(`Running on port ${PORT}!`));
```

```
nano package.json
```

```
"start": "nodemon --exec ts-node src/server.ts"
```

```
npm run start
```