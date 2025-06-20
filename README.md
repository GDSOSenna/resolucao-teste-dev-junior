# 🛒 Resolução - Teste Fullstack Devnology

Este repositório contém a solução completa para o desafio técnico de desenvolvedor(a) fullstack proposto pela **Devnology**.

A proposta consiste em um sistema de e-commerce com:

- Integração com duas APIs externas (fornecedores brasileiro e europeu)
- Interface web para visualização e filtragem de produtos
- Carrinho de compras com persistência
- Finalização de pedidos com persistência em banco local
- Backend próprio para unificação de dados e gerenciamento de pedidos

---

## 📁 Estrutura do projeto
```
├── backend/ → API NestJS + Prisma + SQLite
├── frontend/ → Interface React + Vite
```
---

## 🚀 Como rodar o projeto

> Cada parte do projeto possui seu próprio `README.md` com instruções detalhadas de instalação e execução.

- Para rodar o **backend**, acesse [`/backend`](./backend)
- Para rodar o **frontend**, acesse [`/frontend`](./frontend)

---

## 📌 Requisitos

- Node.js (v18+ recomendado)
- npm (ou yarn)
- Git

---

## ✅ Status

✔️ Entrega completa com todas as funcionalidades obrigatórias implementadas  
❌ Aplicativo Flutter (não incluso por ser opcional no desafio)

---

## ✍️ Decisões técnicas tomadas

Algumas escolhas foram feitas visando simplicidade, clareza e aderência à proposta do teste.

- A utilização do SQLite como banco local facilitou tanto a implementação quanto os testes rápidos.

- O uso do Prisma permitiu uma modelagem segura e ágil da base de dados.

- O backend foi desenvolvido antes para garantir consistência nas integrações com o frontend e evitar retrabalho.

- O fluxo de requisições foi previamente esquematizado para estruturar de forma coesa a comunicação entre frontend, backend e banco.

Abaixo, esboços mentais iniciais utilizados para guiar a estrutura do projeto:

![screenshot](frontend/public/Captura%20de%20tela%202025-06-20%20021914.png)
![screenshot](frontend/public/Captura%20de%20tela%202025-06-20%20021920.png)

Durante o desenvolvimento do frontend, vários ajustes foram realizados tanto em design quanto em estrutura de código, sempre com foco em manter o sistema escalável e legível.

Algumas bibliotecas e boas práticas foram descobertas e aplicadas ao longo do desafio, contribuindo para minha evolução profissional. Agradeço a oportunidade de participar do processo seletivo e, independentemente do resultado, considero este projeto uma grande adição ao meu portfólio.

## 📬 Contato

Projeto desenvolvido por **GDSOSenna** como parte do processo seletivo da Devnology.
