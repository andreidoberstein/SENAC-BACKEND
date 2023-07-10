## Conceitos
# API (Application Programming Interface / Interface de Programacao de Aplicativos)
```
- um conjunto de especificações que definem de que forma as aplicações irao se comunicar
- regras e protocolos para que softwares interajam entre si
- interface para que um sistema se comunique com outro sistema
- como se fosse o cardápio do restaurante que comunica o restaurante com o clinte
```
# REST (Representation State Transfer ou Transferencia Representacional de Estado)
```
- Restrição de arquitetura
- Conjunto de regras e convenções que permite que 2 sistemas se comuniquem pela internet
- A arquitetura REST separa o backend do frontend
```

# RESTFUL
```
- Utiliza metodos HTTP
- Utilizas em nuvem
- Capacidade de aplicar os principios de REST
```
# Maturidade de modelo RESTful
```
Nivel 0
- A API precisa utilizar o protocolo HTTP para a comunicação
Nível 1
- A API deve possuir mapeamento de recurso bem definidos.
Representando substantivos  que fazem a correta utilização das URIs para os recursos respectivos
- Nivel 2
- A API deve utilizar o protocolo HTTP de forma semantica com seus verbos com o uso GET, POST, PUT, DELETE de acordo com a requisição.
Nivel 3
- A API deve mostrar o seu estado atual de relacionamento com os demais recursos da API
```

# JSON (Javascrip Object Notation / Notação de objeto javascript)
```
- padrão de dados
- estruturar dados em formato de texto
- transferir informações entre servidor e o cliente
{
  "book": {
    "title": "Design Patterns",
    "category": ["Design Patterns", "Techonology", "Project"],
    "author": {
      "name": "Erich Gamma"
    }
  }
}
```

# Requisições HTTP
- O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso.
- GET, PUSH, DELETE, PUT, PATCH

# Headers HTTP
- campo para envio de informações adicionais (normalmente formatação ou autorização) que não tem relação com os dados em si: Authorization, Content Type, Accept

# HTTP Codes
- 100 - 199: Informativos
- 200 - 299: Sucesso
- 300 - 399: Redirecionamento
- 400 - 499: Erros do cliente
- 500 - 599: Erros de servidor

# Framework
- Biblioteca
- Reune varios projetos provendo uma funcionalidade generica

# ExpressJS
- framework para nodeJS
- fornece requisitos minimos para servidores web