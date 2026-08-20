# 🌐 Sistema Web PHISHING - React & Node.js

Aplicação Web full-stack desenvolvida para cadastro e integração entre um frontend em **React** e um backend em **Node.js** com banco de dados **SQLite**, com o objetivo de recriar o site:
https://websai.cps.sp.gov.br/

---

## 📋 Funcionalidades

### 1. ⚛️ Frontend (`React`)
Interface de usuário responsiva desenvolvida em React.

**Comportamento:**
- Formulário interativo para entrada de dados
- Envio de dados via requisições HTTP (`fetch`) para a API REST
- Tratamento de estados de carregamento, erros de conexão e controle de navegação/redirecionamento

### 2. 🟢 Backend (`Node.js & Express`)
API REST responsável pelo processamento e persistência das informações.

**Comportamento:**
- Recebimento e processamento das requisições via rotas Express
- Validação e tratamento de erros de inserção
- Armazenamento dos dados no banco SQLite
- Resposta em formato JSON informando o status da operação

---

## 📸 Screenshot

<table>
  <tr>
    <th align="center">Interface da Aplicação</th>
  </tr>
  <tr>
    <td align="center"><img src="telaprincipal.png" width="700"/></td>
  </tr>
</table>

---

## 🗂️ Estrutura do Projeto

```text
WebSai/
├── frontend/                 
│   ├── src/
│   │   ├── assets/         # Imagens e recursos visuais
│   │   ├── App.jsx         # Componente principal do formulário
│   │   ├── App.css         # Estilização da interface
|   |   ├── index.css        
│   │   └── main.jsx        # Ponto de entrada da aplicação
│   └── package.json
└── backend/                
    ├── server.js # Servidor Express e definição de rotas
    ├── package-lock.json   
    └── package.json
```

---

## 🏗️ Arquitetura

Projeto estruturado na arquitetura Cliente-Servidor (Full-stack).

| Camada             | Tecnologia        | Responsabilidade                                        |
| ------------------ | ----------------- | ------------------------------------------------------- |
| **Frontend**       | React             | Interface do usuário, captura de dados e chamadas à API |
| **Backend**        | Node.js / Express | Regras de negócio, rotas e controle das requisições     |
| **Banco de Dados** | SQLite            | Armazenamento relacional e persistência dos dados       |

---

## 🛠️ Tecnologias

* **Frontend:** React, HTML5, CSS3, JavaScript (ES6+)
* **Backend:** Node.js, Express, CORS
* **Banco de Dados:** SQLite (`sqlite3`)

---

## ▶️ Como executar

### 1. Backend (Servidor)

Acesse o diretório do servidor:

```bash
cd server
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
node server.js
```

### 2. Frontend (Cliente)

Em um novo terminal, acesse a pasta do cliente:

```bash
cd client
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação React:

```bash
npm run dev
```

Depois, acesse o endereço exibido no terminal, geralmente:

```text
http://localhost:5173
```

---
