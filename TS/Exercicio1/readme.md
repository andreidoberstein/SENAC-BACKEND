## 1. Executar arquivo typescript

Verificar versão do node
```bash
node -v
```

Gerar arquivo package.json (gerenciador de dependencias)
```bash
npm init -y
```

Instalar o TypeScript
```bash
npm i -g typescript
```

Criar arquivo index.ts e adicionar o código
```bash
console.log("Senac");
```

Transpilar o codigo ts
```bash
npx tsc index.ts
```

Executar código no console (se o terminal estiver na mesma pasta do arquivo index.ts)
```bash
node index.js
```

## 2. Configurando estrutura para rodar um projeto


Criar pastas
```bash
./src
./build
```

Mover arquivos
```bash
index.ts -> src || mv index.ts ./src (arquivos typescript)
index.js -> build || mv index.js ./build (arquivos javascript)
```

Criar arquivo de configuração do typescript
```bash
npx tsc --init
```

Alterações no arquivo tsconfig
```bash
"target": "es6",
"module": "commonjs",
"sourceMap": true,
"outDir": "./build",
"rootDir": "./src",
"removeComments": true,
"noImplicitAny": true,
```

Adicionar script no package.json
```bash
"start": "npx tsc && node ./build/index.js"
```

Executar o projeto
```bash
npm start
```
