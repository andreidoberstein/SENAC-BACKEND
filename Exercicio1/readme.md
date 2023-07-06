## 1. Executar arquivo typescript

Verificar versão do node
```bash
node -v
```

Instalar o TypeScript
# npm i -g typescript

Criar arquivo index.ts e adicionar o código
# console.log("Senac");

Transpilar o codigo ts
# npx tsc index.ts

Executar código no console (se o terminal estiver na mesma pasta do arquivo index.ts)
# node index.js


# 2. Configurando estrutura para rodar um projeto


Criar pastas
# ./src
# ./build

Mover arquivos
# index.ts -> src (arquivos typescript)
# index.js -> build (arquivos javascript)

Criar arquivo de configuração do typescript
# npx tsc --init

Alterações no arquivo tsconfig
# "target": "es6",
# "module": "commonjs",
# "sourceMap": true,
# "outDir": "./build",
# "rootDir": "./src",
# "removeComments": true,
# "noImplicitAny": true,

Gerar arquivo package.json (gerenciador de dependencias)
# npm init -y

Adicionar script no package.json
# "start": "npx tsc && node ./build/index.js"

Executar o projeto
# npm start
