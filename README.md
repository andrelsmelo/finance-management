
# Coming soon ...

Uma interface de gerenciamento de finanças, com categorias de gastos, visualizacao de relatorios e cadastro de usuarios.

NodeJs -> Backend
ReactJs -> Frontend
MySQL -> DB

Backend será uma API rest que podera ser utilizada futuramente em apps mobile

Frontend responsivo Desktop, Tablet e mobile

Banco de Dados com migrations e seeders para facil implantacao.

## Brainstorming
Agents

Cliente
- CRUD despesas/receitas
-Atualizar seu cadastro
-Baixar relatórios (PDF, CSV)
-Visualizar tela RESUMO

Admin
- CRUD Clientes
- Cadastrar categorias de gastos
- Atualizar formulario de login
- Alterar tema do site(PLUS)

Convidado
- Ver a landing page
- Se cadastrar (Login/Registrar)

------------------------------------------------------------
Paginas/Modals

CRUD Despesas/Receitas
CRUD Clientes
CRUD Categorias

Landing Page
Resumo
Admin Page
Login/Registrar

-------------------------------------------------------------
Estruturação do DB

users
id, login, senha, e-mail, createdAt, updatedAt, deletedAt
1 | lucakahn | 123luca | luca@email.com |

clients
id, user_id, name, gender, wage_date, wage_value, createdAt, updatedAt, deletedAt
2 | 1 | Luca | M | 05 | 3400 | 

registers
id, client_id, register_date, value, category_id, revenue_type_id,  createdAt, updatedAt, deletedAt
1 | 2 | 13/03/2023 | 250 | 3 | 2 |

revenue_type
id, text, createdAt, updatedAt, deletedAt
1 | outcome |
2 | income |

categories
id, name, createdAt, updatedAt, deletedAt
1 | grocerys |

## Autores

- [ @andrelsmelo ](https://github.com/andrelsmelo)

- [ @lucagamakahn ](https://github.com/luca-gama-kahn)