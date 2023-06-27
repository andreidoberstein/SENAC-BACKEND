Verificar versão do node
# node -v

Gerar arquivo package.json
# npm init -y

Instalar o TypeScript
# npm i -g typescript

Transpilar o codigo ts
# npx tsc index.ts

Executar código no console
# node index.js

# Adicionar script no package.json
"start": "npx tsc && node ./build/index.js"

Criar arquivo de configuração
# npx tsc --init

Alterações
# "target": "es6",
# "module": "commonjs",
# "sourceMap": true,
# "outDir": "./build",
# "rootDir": "./src",
# "removeComments": true,
# "noImplicitAny": true, 

Transpilar arquivo .ts
# npx tsc
