<p align="center">Desafio técnico da kognit</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

Front-end

- React
- TypeScript
- Chakra-ui
- Vite

Back-end

- C#
- .NET 7 (WebApi)
- Entity Framework Core

Banco de dados

- SQL Server (Docker)

## Pré-requisitos
- C#
- .NET 7

## Execute o projeto

1. Clone este repositório `git clone https://github.com/dudunog/kognit-challenge.git`
2. Inicie o docker com `docker-compose up -d`
   1. O Docker vai criar um container com um banco de dados SQL Server local
3. Entre no diretório do back-end com `cd access-green-challenge`
4. Abra a solution .NET com o Visual Studio e execute o comando `Update-Database` no Console do Gerenciador de Pacotes antes de executar a API
5. Entre no diretório do front-end com `cd frontend`
6. Instale as dependências com `yarn install` ou `npm install`
7. Inicie o front-end em modo desenvolvimento com `yarn run dev` ou `npm run dev`
