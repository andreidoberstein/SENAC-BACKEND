# Configuração para criar API com NodeJS 💻

## Preparando ambiente básico

Verifica versão do node
```
node -v
```

Gerar arquivo de configuração geral do projeto package.json (gerenciador de dependencias)
```
npm init -y
```
Criar arquivo de configuração do typescript
```
npx tsc --init
```

Alterar configurações no arquivo tsconfig.json
```
"target": "es6",
"module": "commonjs",
"sourceMap": true,
"outDir": "./build",
"rootDir": "./src",
"removeComments": true,
"noImplicitAny": true,
```

Instalar o módulos dos types e ts-node para compilar o projeto
```
npm add @types/node typescript
```
```
npm add -D ts-node
```

Instalar o pacote express para implementar servidor web
```
npm i express
```

Instalar o pacote mysql2 para manipular banco de dados
```
npm i mysql2
```

Instalar o pacote nodemon para reiniciar o servidor automaticamente
```
npm i nodemon -D
```

Instalar o pacote dotenv para gerenciar variáveis de ambiente
```
npm i dotenv
```

Criar arquivo .gitignore
```
nano .gitignore
```

Adicionar o nome da pasta node_modules no arquivo
```
node_modules
```
**Caso a pasta a pasta node_modules não esteja no seu projeto, basta rodar o comando npm install**

Salvar arquivo .gitignore
```
Ctrl + O
```

Fechar arquivo .gitignore
```
Ctrl + X
```

Criar pasta src e acessa
```
mkdir src && cd src
```

Criar arquivo server.ts
```
nano server.ts
```

Adicionar conteúdo no arquivo server.ts
```
// Importa o pacote express
const express = require('express');

// App Express
const app = express()

// Endpoint raiz
app.get('/', (request: any, response: any) => {
    response.send('Bem-vindo!')
})

// Inicia o sevidor
app.listen(3333, () => {
    console.log(`Servidor rodando com sucesso na porta 3333`)
})
```

Salvar arquivo server.ts
```
Ctrl + O
```

Fechar arquivo server.ts
```
Ctrl + X
```

Adicionar script no arquivo package.json
```
"dev": "nodemon --exec ts-node src/server.ts"
```

Rodar comando no terminal
```
npm run dev
```

# Estrutura de pastas
```
├── primeiraApi
│   ├── build
│   │   ├── server.js
│   │   └── server.js.map
│   ├── node_modules
│   ├── src
│   │   └── server.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
```
