# 🛒 Desafio Frontend - E-commerce

Este projeto é a resolução de um teste técnico para a vaga de Desenvolvedor Frontend. O objetivo foi construir o fluxo de compras de um e-commerce (Listagem de Produtos, Formulário de Cliente e Checkout), garantindo fidelidade visual ao design proposto, arquitetura escalável e gerenciamento de estado global.

## 🌍 Deploy 

Acesse a aplicação rodando em produção:  
🔗 **[Clique aqui para ver o projeto no ar](https://xbrain-teste-frontend.vercel.app/)**


## 🚀 Tecnologias Utilizadas

Este projeto foi construído respeitando estritamente os requisitos técnicos da vaga:
- **ReactJS** (Hooks, Componentes Funcionais)
- **Material-UI (MUI)** (Estilização via `sx`, `ThemeProvider`, `CssBaseline`)
- **Redux** (Gerenciamento de estado global do carrinho)
- **Redux-Form** (Gerenciamento e validação de formulários)
- **React Router Dom** (Navegação SPA)

## ✨ Funcionalidades e Diferenciais Técnicos

- **Pixel-Perfect UI:** Estilização avançada de componentes MUI para garantir 100% de fidelidade ao design fornecido.
- **Adapter Pattern:** Criação de adaptadores customizados para integrar o `redux-form` (biblioteca legada) de forma harmoniosa com os componentes modernos do Material-UI (`TextField`, `Select`).
- **Gerenciamento de Estado:** O carrinho de compras atualiza dinamicamente o Redux, garantindo que o valor total e os itens reflitam instantaneamente na interface e no botão de finalização.
- **Validações de Formulário:** O formulário possui validações nativas (campos obrigatórios, Regex de e-mail), travando o botão de *submit* em caso de inconsistências ou carrinho vazio.
- **Persistência de Dados Sem Backend:** Utilização do `LocalStorage` para simular a persistência de uma transação ao navegar da listagem para a tela de Checkout de forma segura.
- **Mobile First e Responsividade:** Uso de Flexbox avançado e do sistema de Grid do MUI para adaptação perfeita em dispositivos móveis, tablets e desktops.

## 🛠️ Como rodar o projeto localmente

**1. Clone o repositório**
```bash
git clone https://github.com/eduardotorres-17/xbrain-teste-frontend.git
```

**2. Acesse a pasta do projeto**
```bash
cd xbrain-teste-frontend
```

**3. Instale as dependências**
```bash
npm install
# ou
yarn install
```

**4. Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn start
```

O projeto estará rodando em `http://localhost:5173`.
