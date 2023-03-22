# Documentação da API

Esta é a documentação da API que permite gerenciar receitas, receitas, usuários e categorias.

Acesse http://localhost:7575/api/ para acessar a documentação da API.

## Autenticação

Todos os endpoints, exceto os listados abaixo, requerem autenticação usando um JSON Web Token (JWT) obtido chamando o endpoint /login com um usuário válido.

## Endpoints

**GET /**

Retorna um HTML com essa documentação.

- Status code: `200`

**GET /is-alive**

Retorna um JSON com informando que o backend esta funcionando.

- Status code: `200`
- Body:

```bash
{
  "message": "Backend is alive"
}
```

**POST /login**

Permite que um usuário autentique e obtenha um JWT para usar em solicitações subsequentes. O corpo da solicitação deve conter as credenciais do usuário (e-mail e senha).

Request

- Body:

```bash
{
  "email": "user@example.com",
  "password": "password"
}
```

Response

- Status code: `200`
- Body:

```bash
{
  "token": "<JWT>"
}
```

**GET /expenses**

Retorna uma lista de todos os registros de despesas.

**GET /expense/:id**

Retorna um registro de despesa.

**POST /expense**

Insere um novo registro de despesa.

Request

- Body:

```bash
{
  "user_id": 1,
	"date": "2022-03-14",
	"amount": 1250,
	"category_id": 3
}
```

**PUT /expense/:id**

Atualiza um registro de despesa.

Request

- Body:

```bash
{
  "user_id": 1,
	"date": "2022-03-14",
	"amount": 1650,
	"category_id": 3
}
```

**DELETE /expense/:id**

Deleta um registro de despesa.

**GET /expense/user/:user_id**

Retorna uma lista de todos os registros de despesa de um usuário.

**GET /expense/user/:user_id/:start_date/:end_date**

Retorna uma lista de todos os registros de despesa de um usuário filtrados por data.

**GET /revenues**

Retorna uma lista de todos os registros de receitas.

**GET /revenue/:id**

Retorna um registro de receita.

**POST /revenue**

Insere um registro de receita.

Request

- Body:

```bash
{
  "user_id": 1,
	"date": "2022-03-14",
	"amount": 1250,
	"category_id": 3
}
```

**PUT /revenue/:id**

Atualiza um registro de receita.

Request

- Body:

```bash
{
  "user_id": 1,
	"date": "2022-03-14",
	"amount": 1650,
	"category_id": 3
}

```

**DELETE /revenue/:id**

Deleta um regsitro de receita.

**GET /revenue/user/:user_id**

Retorna uma lista de todos os registros de receitas de um usuario.

**GET /revenue/user/:user_id/:start_date/:end_date**

Retorna uma lista de todos os registros de receitas de um usuário filtrados por data.

**GET /users**

Retorna uma lista de todos os usuários.

**GET /user/:id**

Retorna um usuário.

**POST /user**

Insere um novo usuário.

Request

- Body:

```bash
{
  "name": "teste",
  "password": "teste123",
  "email": "teste@teste.com"
}
```

**PUT /user/:id**

Atualiza um usuário.

Request

- Body:

```bash
{
  "name": "teste",
  "password": "teste321",
  "email": "teste@teste.com"
}
```

**DELETE /user/:id**

Deleta um usuário.

**GET /categories**

Retorna uma lista de todas as categorias.

**GET /category/:id**

Retorna uma categoria.

**POST /category**

Insere uma nova categoria.

Request

- Body:

```bash
{
  "name": "Teste",
    "description": "Descrição teste"
}

```

**PUT /category/:id**

Atualize uma categoria.

Request

- Body:

```bash
{
  "name": "Teste2",
	"description": "Descrição teste2"
}
```

**DELETE /category/:id**

Deleta uma categoria.
