
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
- Tailwind CSS
- React Toastify

## 📦 Instalação e uso

1. Acesse a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências principais:

```bash
npm install
```

3. Inicie o projeto

```bash
npm run dev
```

4. Aplicação ficará disponível na porta:

http://localhost:5173

## Estrutura

frontend/
├── src/
│  ├── components/
│  ├── pages/
│  ├── services/
│  └── App.tsx
├── public/
└── README.md

## Comunicação com API

GET /products
GET /products/provider/:provider
POST /orders
GET /orders

## Preview

![screenshot](./public/Captura%20de%20tela%202025-06-20%20012905.png)