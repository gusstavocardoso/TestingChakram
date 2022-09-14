# Testing Chakram
Projeto de automação de testes de API REST com Chakram.

## Rodando localmente

Clone o projeto

```bash
  https://github.com/gusstavocardoso/TestingChakram.git
```

Entre no diretório do projeto

```bash
  cd TestingChakram
```

Instale as dependências

```bash
  npm install
```

Execute os testes

```bash
  npm test
```
## Arquitetura do projeto
````
TestingChakram
├── package.json
├── support
│   ├── common
│   │   └── Env.js
│   └── data
│       └── User.js
└── tests
    ├── delete.spec.js
    ├── get.spec.js
    ├── post.spec.js
    └── put.spec.js
