# Criar arquivo de configuração do TS
npx tsc --init

# Configurações no arquivo tsconfig.json
"target":"es6",
"module":"commonjs",
"sourceMap": true,
"outDir":"./build",
"rootDir": "./src",
"removeComments": true,
"noImplicitAny": true,

# Adicionar script no package.josn
"start": "npx tsc && node ./build/index.js"