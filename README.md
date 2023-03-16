# Sistema de Gerenciamento de Finanças

Este é um projeto de sistema de gerenciamento de finanças desenvolvido com o objetivo de estudos. O sistema permite que o usuário registre suas transações financeiras, como receitas e despesas, e visualize informações úteis sobre suas finanças, como o saldo atual, histórico de transações e relatórios financeiros.

O sistema foi construído utilizando NodeJs + NextJs e possui uma interface intuitiva e fácil de usar. Ele permite que o usuário crie uma conta e faça login para acessar suas informações financeiras em qualquer lugar, a qualquer momento.

O objetivo principal deste projeto é fornecer uma plataforma para a prática de habilidades em desenvolvimento de software, bem como oferecer uma oportunidade para estudar conceitos relacionados à gestão financeira pessoal. O sistema não está sendo desenvolvido para uso comercial ou para fins de lucro.
## Documentação

Foram definidos três agentes: Cliente, Convidado e Admin.

As seguintes funções estão disponíveis para cada agente:

**Convidado**

- Ver a landing page
- Se cadastrar (Login/Registrar)

**Cliente**

- CRUD de despesas/receitas
- Atualizar seu cadastro
- Baixar relatórios (PDF, CSV)
- Visualizar tela de resumo

**Admin**

- CRUD de clientes
- Cadastrar novas categorias de gastos

As seguintes telas/modals estão disponíveis:

- Tela de registro de despesas/receitas
- Tela de gerenciamento de clientes
- Tela de gerenciamento de categorias
- Landing page
- Tela de resumo
- Tela de Admin
- Tela de Login/Registrar

Protótipo abaixo:

*Insira protótipo do Canva aqui*

A estrutura do banco de dados foi definida da seguinte forma:

![UML DB](https://user-images.githubusercontent.com/95425092/225045412-7d0b53ef-59d5-40ff-8ff1-ae8f3f373ed1.jpg)

## Como utilizar


Clonne o repositório para a sua máquina local com 
```bash
  git clone https://github.com/andrelsmelo/finance-management.git
```
Instale as dependências necessárias tanto da API quanto do APP

```bash
  npm install
```

Crie e configure o arquivo .env na pasta /api e /app com as informações conforme o respectivo .env.example

Rode as migrações e seeders na API

```bash
  npm run migrate
  npm run seeder
```

Inicie o servidor local.

```bash
  npm start
```
    
## Autores

- [ @andrelsmelo ](https://github.com/andrelsmelo)

- [ @lucagamakahn ](https://github.com/luca-gama-kahn)
