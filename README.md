
# 🚀 Desafio Técnico – Perfil de Usuário

Este é um projeto web full stack que implementa uma interface de perfil de usuário com funcionalidades de **exibição**, **criação**, **edição** e **exclusão** de dados. As informações são salvas em um banco de dados **MySQL** e a aplicação possui design **responsivo**, funcionando suave em desktop e mobile.

## 📝 Visão Geral do Projeto

O projeto é dividido em duas partes principais:

- **Backend:**  
  API RESTful construída com **Node.js + Express**, responsável por toda a lógica de negócio e comunicação com o banco de dados.  
  Utiliza **Sequelize** como ORM para interagir com o **MySQL**.

- **Frontend:**  
  SPA desenvolvida com **Vue.js**, consumindo a API do backend para fornecer uma interface de usuário interativa e responsiva.

## ⚙️ Funcionalidades

✅ Exibição de informações do usuário (imagem de perfil, nome, idade, endereço, biografia)  
✅ Cadastro de novos usuários  
✅ Edição de dados (imagem, dados pessoais, bio e endereço)  
✅ Exclusão de usuários  
✅ Persistência no MySQL  
✅ Interface responsiva (desktop e mobile)

## 📂 Estrutura do Repositório

\`\`\`
/
├── src/
│   ├── app.js                  # Arquivo principal do Express
│   ├── config/
│   │   └── db.js               # Conexão com o MySQL
│   ├── controllers/
│   │   └── userController.js   # Controle das rotas de usuário
│   ├── frontend/               # Código do frontend em Vue.js
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/     # Componentes Vue
│   │   │   ├── views/          # Páginas da aplicação
│   │   │   ├── App.vue         # Componente raiz
│   │   │   └── ...
│   ├── middlewares/
│   │   └── uploadMiddleware.js # Upload de imagens (Multer)
│   ├── models/
│   │   └── User.js             # Modelo do usuário (Sequelize)
│   ├── routes/
│   │   └── userRoutes.js       # Rotas da API
│   └── server.js               # Inicialização do servidor
├── storage/
│   └── img/                    # Imagens de perfil salvas
└── test/
    ├── server.test.js          # Testes do servidor
    └── user.test.js            # Testes de usuário
\`\`\`

## 🛠️ Configuração e Execução

### Pré-requisitos

- **Node.js** + **npm** (ou **Yarn**)  
- **MySQL**

---

### 1️⃣ Configuração do Backend

**a. Variáveis de ambiente**  
Crie um arquivo `.env` na raiz do projeto:

\`\`\`
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_PORT=3306
DB_DATABASE=nome_do_seu_banco_de_dados
NODE_HOST=localhost
\`\`\`

**b. Instalação das dependências**

\`\`\`bash
npm install
\`\`\`

**c. Rodar o backend**

\`\`\`bash
npm run dev
\`\`\`

👉 O servidor vai subir em: \`http://localhost:3000\`

---

### 2️⃣ Configuração do Frontend

**a. Configurar o endereço da API**  
Abra o arquivo \`src/frontend/src/app.js\` e ajuste o host:

\`\`\`js
import axios from "axios";
const host = 'http://localhost:3000'; // <--- ALTERE AQUI
\`\`\`

**b. Instalar dependências**

\`\`\`bash
cd src/frontend
npm install
\`\`\`

**c. Rodar o frontend**

\`\`\`bash
npm run serve
\`\`\`

👉 Acesse em: \`http://localhost:8080\`

---

## 🖥️ Como Usar a Aplicação

- **Página inicial:** Opções de *Criar usuário* e *Consultar usuário*
- **Criar usuário:** Formulário para cadastro
- **Consultar usuário:** Lista com usuários cadastrados
- **Alterar perfil:** Modal para editar imagem, dados, bio e endereço
- **Deletar usuário:** Opção no modal de edição

---

## 🧪 Testes

Rodar testes de integração do backend:

\`\`\`bash
npm test
\`\`\`

---
