
---

## 📁 `frontend/README.md`

```md
# Frontend - Resolução Devnology

Este é o frontend do projeto de e-commerce com listagem de produtos, carrinho de compras e integração com a API backend.

## 🚀 Tecnologias

- React + Vite
- React Router DOM
- React Icons
- Axios
- CSS puro

## 📦 Instalação e uso

1. Acesse a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências principais:

```bash
npm install
```

3. Instale as bibliotecas de forma manual

```bash
npm install react-router-dom react-icons axios
```

4. Inicie o projeto

```bash
npm run dev
```

5. Aplicação ficará disponível na porta:

http://localhost:5173

## Estrutura

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.tsx
├── public/
└── README.md

## Comunicação com API

GET /products
GET /products/provider/:provider
POST /orders
GET /orders