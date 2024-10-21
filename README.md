<h1 align="center">
  <img
    src=".github/nlw-pocket-logo.svg"
    title="React Native Todo List"
    alt="React Native Todo List"
  />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pabloxt14/react-native-todo-list">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/pabloxt14/react-native-todo-list" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pabloxt14/react-native-todo-list">
  
  <a href="https://github.com/pabloxt14/react-native-todo-list/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pabloxt14/react-native-todo-list">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

   <a href="https://github.com/pabloxt14/react-native-todo-list/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pabloxt14/react-native-todo-list?style=social">
  </a>
</p>

<p>
  <img src=".github/thumbnail.png" alt="Thumbnail do projeto" />
</p>

<h4 align="center"> 
	🚧 Aplicação em Desenvolvimento 🚧
</h4>

<p align="center">
 <a href="#-about">About</a> | 
 <a href="#-layout">Layout</a> | 
 <a href="#-setup">Setup</a> | 
 <a href="#-technologies">Technologies</a> | 
 <a href="#-license">License</a>
</p>


## 💻 About

Esta aplicação de nome **in.orbit**, consiste em um site desktop para registro de metas além de contar com um progresso semanal das metas já completadas e das pendentes.

Os principais aprendizados neste projeto foram a implementação de um back-end (API) utilizando o framework `Fastify`, para construção de rotas, requisições HTTP e tratamento de erros, contando também com a utilização do ORM `Drizzle` para a persistência de dados e conexão com o banco de dados. Valendo também apontar o uso de princípios de `SOLID` para a implementação desse back-end.   

Além disso, contou também a implementação da interface front-end utilizando `React + Vite` e da incrivelmente útil biblioteca de "utility classes" (classes utilitárias) `TailwindCSS` para uma fácil estilização de elementos da interface. E para lidar com as requisições na parte do front-end, utilizou-se a biblioteca `React Query`, que apresenta um formato de fetch de dados muito bem estruturado e enxuto, tendo também seu ótimo sistema de cache e reutilização de dados. Ademais, teve-se a aplicação da biblioteca `React Hook Form` para a validação de formulários de uma forma fácil e eficaz.

Todavia, vale ressaltar que essa aplicação foi desenvolvida durante o NLW Pocket JS da [Rocketseat](https://www.rocketseat.com.br/) utilizando principalmente tecnologias como `Node`, `React`, `TypeScript`, `Fastify`, `Drizzle`, `Vite`, `React Query` e `Tailwind`.


<!-- ## 🔗 Deploy

O deploy da aplicação pode ser acessada através da seguinte URL base: https://pabloxt14-nlw-expert-notes.vercel.app/ -->


## 🎨 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1415093862269754302/react-native-todo-list). É necessário ter conta no [Figma](https://www.figma.com/) para acessá-lo.

A seguir, veja uma demonstração das principais telas da aplicação:

### Empty

<p align="center">
  <img
    src=".github/screens/empty.png"
    alt="Empty Goals Page"
    title="Empty Goals Page"
    width="100%"
  />
</p>

### Create Goal

<p align="center">
  <img
    src=".github/screens/create-goal.png"
    alt="Create Goal"
    title="Create Goal"
    width="100%"
  />
</p>

### Goals (empty)

<p align="center">
  <img
    src=".github/screens/goals-empty.png"
    alt="Goals (empty)"
    title="Goals (empty)"
    width="100%"
  />
</p>

### Goals (filled)

<p align="center">
  <img
    src=".github/screens/goals-filled.png"
    alt="Goals (filled)"
    title="Goals (filled)"
    width="100%"
  />
</p>


## ⚙ Setup

### 📝 Requisites

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) 

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Cloning and Running

Passo a passo para clonar e executar a aplicação na sua máquina:

```bash
# Clone este repositório
$ git clone https://github.com/PabloXT14/react-native-todo-list.git

# Acesse a pasta do projeto no terminal
$ cd react-native-todo-list

# Instale as dependências
$ npm install

# Execute o projeto em modo de desenvolvimento
$ npm run start

# A aplicação inciará em algum aparelho ou emulador na máquina.
```


## 🛠 Technologies

As seguintes principais ferramentas foram usadas na construção do projeto:

### Back-end

- **[TypeScript](https://www.typescriptlang.org/)**
- **[Fastify](https://fastify.dev/)**
- **[Drizzle](https://orm.drizzle.team/)**
- **[Postgres](https://www.npmjs.com/package/postgres)**
- **[Zod](https://zod.dev/)**
- **[DayJS](https://day.js.org/)**
- **[@paralleldrive/cuid2](https://github.com/paralleldrive/cuid2)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo [package.json](./server/package.json)

### Front-end

- **[React + Vite](https://vitejs.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[TailwindCSS](https://tailwindcss.com/)**
- **[TailwindCSS Variants](https://www.tailwind-variants.org/)**
- **[React Query](https://tanstack.com/query/latest)**
- **[Lucide](https://lucide.dev/)**
- **[DayJS](https://day.js.org/)**
- **[Radix UI](https://www.radix-ui.com/)**
- **[React Hook Form](https://react-hook-form.com/)**
- **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo [package.json](./web/package.json)


## 📝 License

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações

<p align="center">
  Feito com 💜 por Pablo Alan 👋🏽 <a href="https://www.linkedin.com/in/pabloalan/" target="_blank">Entre em contato!</a>  
</p>
