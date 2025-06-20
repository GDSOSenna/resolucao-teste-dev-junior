# Backend - Resolução Devnology

Este é o backend do projeto de e-commerce desenvolvido com NestJS e Prisma, responsável por consumir dados de fornecedores externos e gerenciar pedidos.

## 🚀 Tecnologias

- NestJS
- Prisma ORM
- SQLite
- Axios

## 📦 Instalação e uso

1. Acesse a pasta:

```bash
cd backend
```

2. Instale as dependências

```bash
npm install
```

3. Gere o banco de dados e o Prisma Client

```bash
npx prisma migrate dev --name create_orders
```

4. Inicie o servidor

```bash
npm start
```

5. API estará disponível em:

http://localhost:3000

## Estrutura

backend/
├── src/
│   ├── products/
│   ├── orders/
│   ├── prisma/
│   └── main.ts
├── prisma/
│   └── schema.prisma
└── README.md

## Endpoints para requisição

GET /products
GET /products/provider/:provider
GET /products/:provider:id
POST /orders
GET /orders