# API RESTful para o gerenciamento de uma concessionária de veículos
Projeto feito para aplicação em um processo seletivo

## Tecnologias
- NodeJS
  - Express
  - Nodemon
  - PG
  - Dotenv
  - Cors
  - Knex
  - Bcrypt
  - Jsonwebtoken
  - Joi
- JavaScript
- PostgreSQL
  
## Features
- Cadastrar Usuário
- Fazer Login 
- Autentificação do Usuário Logado
- Validações do token
- Cadastro de um Carro
- Lisagem de Carros
- Edição de um Carro
- Exclusão de um Carro
- Cadastro de um Vendedor
- Listagem dos Vendedores
- Edição de um Vendedor
- Exclusão de um Vendedor
- Cadastro de uma Venda
- Listagem das Vendas
- Edição de uma Venda
- Exclusão de uma Venda

## Endpoints
#### `POST` `/usuario`
Essa é a rota que será utilizada para cadastrar um novo usuario no sistema.

Input:
```javascript
{
	"nome": "Nilza Neves",
	"email": "nilza@email.com",
	"senha": "Vovozona"
}
```

Output:
```javascript
{
	"id": 2,
	"nome": "Nilza Neves",
	"email": "nilza@email.com"
}
```

Output inválido (exemplos):
```javascript
{
    "mensagem": "Já existe usuário cadastrado com o e-mail informado."
}
```
```javascript
{
    "mensagem": "Todos os campos são obrigatórios."
}
```
```javascript
{
    "mensagem": "O campo email precisa ter um formato válido."
}
```
```javascript
{
    "mensagem": "A senha precisa ter, no mínimo, 8 caracteres"
}
```
```javascript
{
    "mensagem": "A senha precisa ter pelo menos uma LETRA MAIÚSCULA"
}
```

#### `POST` `/login`
Essa é a rota que permite o usuario cadastrado realizar o login no sistema.

Input:
```javascript
{
	"email": "nilza@email.com",
	"senha": "Vovozona"
}
```

Output:
```javascript
{
	"usuario": {
		"id": 2,
		"nome": "Nilza Neves",
		"email": "nilza@email.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY4OTY0MDE4LCJleHAiOjE2Njg5OTI4MTh9.tPASVxVNU6O3wefmFXM78H020xaSZ7mQm-sCV9KWhEE"
}
```

Output inválido:
```javascript
{
    "mensagem": "Usuário e/ou senha inválido(s)."
}
```
```javascript
{
    "mensagem": "Por favor, insira seu e-mail."
}
```
```javascript
{
    "mensagem": "Por favor, insira sua senha."
}
```


## **OBS**: Todas os endpoints a seguir, a partir desse ponto, exigem o token de autenticação do usuário logado, recebendo no header com o formato Bearer Token. Portanto, em cada funcionalidade há a validação do token informado.



#### `POST` `/carros`
Essa é a rota que será chamada quando o usuario logado quiser cadastrar um novo carro no sistema.

Input:
```javascript
{
	"marca": "Volkswagen",
	"modelo": "Fusca",
	"ano": 1973,
	"cor": "Branca",
	"valor": 5500,
	"vendido": false
}
```

Output:
```javascript
{
	"id": 8,
	"marca": "Volkswagen",
	"modelo": "Fusca",
	"ano": 1973,
	"cor": "Branca",
	"valor": "5500",
	"vendido": false
}
```

Output inválido (exemplos):
```javascript
{
    "mensagem": "Não autorizado. Por favor, efetue o login."
}
```
```javascript
{
    "mensagem": "Todos os campos são obrigatórios."
}
```
```javascript
{
    "mensagem": "O campo ANO precisa ser um número inteiro."
}
```
```javascript
{
    "mensagem": "O campo VALOR precisa ser um número positivo."
}
```
```javascript
{
    "mensagem": "Insira no campo VENDIDO a palavra FALSE com todos caracteres MINÚSCULOS e sem estar contido dentro de aspas."
}
```
```javascript
{
    "mensagem": "Não é possível inserir um carro com status de VENDIDO no banco de dados do sistema."
}
```

#### `GET` `/carros`
Essa é a rota que será chamada quando o usuário logado quiser listar todos os carros cadastrados no sistema. 

Input:
```javascript
// Sem conteúdo no corpo (body) da resposta
```

Output (exemplos):
```javascript
[
	{
		"id": 1,
		"marca": "Volkswagen",
		"modelo": "Fusca",
		"ano": 1973,
		"cor": "Branca",
		"valor": 5500,
		"vendido": false
	},
	{
		"id": 2,
		"marca": "Volkswagen",
		"modelo": "Fusca",
		"ano": 1973,
		"cor": "Branca",
		"valor": 5500,
		"vendido": false
	},
	{
		"id": 3,
		"marca": "Volkswagen",
		"modelo": "Fusca",
		"ano": 1973,
		"cor": "Branca",
		"valor": 5500,
		"vendido": false
	},
	{
		"id": 4,
		"marca": "Volkswagen",
		"modelo": "Fusca",
		"ano": 1973,
		"cor": "Branca",
		"valor": 5500,
		"vendido": false
	},
	{
		"id": 5,
		"marca": "Volkswagen",
		"modelo": "Fusca",
		"ano": 1973,
		"cor": "Branca",
		"valor": 5500,
		"vendido": false
	},
	{
		"id": 6,
		"marca": "Volkswagen",
		"modelo": "Fusca",
		"ano": 1973,
		"cor": "Branca",
		"valor": 5500,
		"vendido": false
	},
	{
		"id": 7,
		"marca": "Volkswagen",
		"modelo": "Fusca",
		"ano": 1973,
		"cor": "Branca",
		"valor": 5500,
		"vendido": false
	},
	{
		"id": 8,
		"marca": "Volkswagen",
		"modelo": "Fusca",
		"ano": 1973,
		"cor": "Branca",
		"valor": 5500,
		"vendido": false
	},
        {
		"id": 9,
		"marca": "Ford",
		"modelo": "Mustang",
		"ano": 2007,
		"cor": "Vermelha",
		"valor": 280000,
		"vendido": true
	},
	{
		"id": 10,
		"marca": "Kia",
		"modelo": "Cerato",
		"ano": 2015,
		"cor": "Grafite",
		"valor": 86500,
		"vendido": true
	},
	{
		"id": 11,
		"marca": "Ford",
		"modelo": "Ka",
		"ano": 2010,
		"cor": "Azul",
		"valor": 12000,
		"vendido": true
	},
	{
		"id": 12,
		"marca": "Chevrolet",
		"modelo": "S10",
		"ano": 2012,
		"cor": "Preta",
		"valor": 38800,
		"vendido": true
	},
        {
		"id": 13,
		"marca": "Ford",
		"modelo": "Ka",
		"ano": 2010,
		"cor": "Vermelha",
		"valor": 12500,
		"vendido": true
	},
        {
		"id": 14,
		"marca": "Ford",
		"modelo": "Mustang",
		"ano": 2008,
		"cor": "Vermelha",
		"valor": 256000,
		"vendido": false
	},
	{
		"id": 15,
		"marca": "Kia",
		"modelo": "Cerato",
		"ano": 2012,
		"cor": "Grafite",
		"valor": 56500,
		"vendido": false
	}
]
```

```javascript
[]
```


#### `PUT` `/carros/:id`
Essa é a rota que será chamada quando o usuario logado quiser editar um carro cadastrado no sistema.

Input:
```javascript
{
	"marca": "Ford",
	"modelo": "Ecosport",
	"ano": 2011,
	"cor": "Preta",
	"valor": 20500,
	"vendido": true
}
```

Output (exemplos):
```javascript
{
	"mensagem": "Carro atualizado com sucesso!"
}
```

Output inválido (exemplos):
```javascript
{
    "mensagem": "Não autorizado. Por favor, efetue o login."
}
```
```javascript
{
    "mensagem": "Todos os campos são obrigatórios."
}
```
```javascript
{
    "mensagem": "O carro não existe cadastrado no banco de dados do sistema."
}
```
```javascript
{
    "mensagem": "O campo ANO precisa ser um número inteiro."
}
```
```javascript
{
    "mensagem": "O campo VALOR precisa ser um número positivo."
}
```
```javascript
{
    "mensagem": "Insira no campo VENDIDO a palavra FALSE com todos caracteres MINÚSCULOS e sem estar contido dentro de aspas."
}
```
```javascript
{
    "mensagem": "Não é possível inserir um carro com status de VENDIDO no banco de dados do sistema."
}
```
```javascript
{
    "mensagem": "O carro não foi atualizado"
}
```


#### `DELETE` `/carros/:id`
Essa é a rota que será chamada quando o usuario logado quiser excluir um carro do sistema. 

Input:
```javascript
// Sem conteúdo no corpo (body) da requisição
```

Output (exemplos):
```javascript
{
	"mensagem": "Carro excluído com sucesso!"
}
```

Output inválido (exemplos):
```javascript
{
    "mensagem": "Não autorizado. Por favor, efetue o login."
}
```
```javascript
{
    "mensagem": "Todos os campos são obrigatórios."
}
```
```javascript
{
    "mensagem": "O carro não existe cadastrado no banco de dados do sistema."
}
```
```javascript
{
    "mensagem": "O campo ANO precisa ser um número inteiro."
}
```
```javascript
{
    "mensagem": "O campo VALOR precisa ser um número positivo."
}
```
```javascript
{
    "mensagem": "Insira no campo VENDIDO a palavra FALSE com todos caracteres MINÚSCULOS e sem estar contido dentro de aspas."
}
```
```javascript
{
    "mensagem": "O carro não foi excluído"
}
```

#### `POST` `/vendedores`
Essa é a rota que será chamada quando o usuario logado quiser cadastrar um novo vendedor no sistema.

Input:
```javascript
{
	"nome": "Abel Ferreira"
}
```

Output:
```javascript
{
	"id": 6,
	"nome": "Abel Ferreira"
}
```

Output inválido (exemplos):
```javascript
{
    "mensagem": "Não autorizado. Por favor, efetue o login."
}
```
```javascript
{
    "mensagem": "Todos os campos são obrigatórios."
}
```

#### `GET` `/vendedores`
Essa é a rota que será chamada quando o usuário logado quiser listar todos os vendedores cadastrados no sistema. 

Input:
```javascript
// Sem conteúdo no corpo (body) da resposta
```

Output (exemplos):
```javascript
[
	{
		"id": 1,
		"nome": "Marcos Castro"
	},
        {
		"id": 2,
		"nome": "Juca Chaves"
	},
	{
		"id": 3,
		"nome": "Gustavo Scarpa"
	},
	{
		"id": 4,
		"nome": "Deyverson Luís"
	},
	{
		"id": 5,
		"nome": "Maria Eugênia"
	},
	
	{
		"id": 6,
		"nome": "Abel Ferreira"
	}
]
```

```javascript
[]
```

#### `PUT` `/vendedores/:id`
Essa é a rota que será chamada quando o usuario logado quiser editar um vendedor cadastrado no sistema.

Input:
```javascript
{
	"nome": "Marcos Castro da Silva"
}
```

Output (exemplos):
```javascript
{
	"mensagem": "Vendedor atualizado com sucesso!"
}
```

Output inválido (exemplos):
```javascript
{
    "mensagem": "Não autorizado. Por favor, efetue o login."
}
```
```javascript
{
    "mensagem": "Todos os campos são obrigatórios."
}
```
```javascript
{
    "mensagem": "O vendedor não existe cadastrado no banco de dados do sistema."
}
```
```javascript
{
    "mensagem": "O vendedor não foi atualizado"
}
```

#### `DELETE` `/vendedores/:id`
Essa é a rota que será chamada quando o usuario logado quiser excluir um vendedor do sistema. 

Input:
```javascript
// Sem conteúdo no corpo (body) da requisição
```

Output (exemplos):
```javascript
{
	"mensagem": "Vendedor excluído com sucesso!"
}
```

Output inválido (exemplos):
```javascript
{
    "mensagem": "Não autorizado. Por favor, efetue o login."
}
```
```javascript
{
    "mensagem": "Todos os campos são obrigatórios."
}
```
```javascript
{
    "mensagem": "O vendedor não existe cadastrado no banco de dados do sistema."
}
```
```javascript
{
    "mensagem": "O vendedor não foi excluído"
}
```

#### `POST` `/vendas`
Essa é a rota que será chamada quando o usuario logado quiser cadastrar uma nova venda no sistema.

Input:
```javascript
{
	"carro_id": 2,
	"valor": 18500,
	"data_venda": "2022-02-25",
	"vendedor_id": 4
}
```

Output:
```javascript
{
	"carro": {
		"id": 2,
		"marca": "Volkswagen",
		"modelo": "Fusca",
		"ano": 1973,
		"cor": "Branca",
		"valor": "5500"
	},
	"valor_vendido": 18500,
	"data_venda": "2022-02-25",
	"vendedor": {
		"id": 4,
		"nome": "Deyverson Luís"
	}
}
```

Output inválido (exemplos):
```javascript
{
    "mensagem": "Não autorizado. Por favor, efetue o login."
}
```
```javascript
{
    "mensagem": "Todos os campos são obrigatórios."
}
```
```javascript
{
    "mensagem": "O campo CARRO_ID precisa ser um número inteiro."
}
```
```javascript
{
    "mensagem": "O campo VALOR precisa ser um número positivo."
}
```
```javascript
{
    "mensagem": "O campo DATA_VENDA precisa ser um formato de data válido."
}
```
```javascript
{
    "mensagem": "O campo VENDEDOR_ID precisa ser um número inteiro."
}
```
```javascript
{
    "mensagem": "O carro não foi encontrado no sistema."
}
```
```javascript
{
    "mensagem": "O vendedor não foi encontrado no sistema."
}
```

#### `GET` `/vendas`
Essa é a rota que será chamada quando o usuário logado quiser listar todas as vendas cadastradas no sistema. 

Input:
```javascript
// Sem conteúdo no corpo (body) da resposta
```

Output (exemplos):
```javascript
[
	{
		"id": 1,
		"carro": "Fusca",
		"valor": 6500,
		"data_venda": "2022-11-25T00:00:00.000Z",
		"vendedor": "Gustavo Scarpa",
		"carro_id": 6,
		"vendedor_id": 3
	},
	{
		"id": 2,
		"carro": "Fusca",
		"valor": 16500,
		"data_venda": "2022-11-25T00:00:00.000Z",
		"vendedor": "Abel Ferreira",
		"carro_id": 8,
		"vendedor_id": 6
	},
	{
		"id": 3,
		"carro": "Fusca",
		"valor": 18500,
		"data_venda": "2022-02-25T00:00:00.000Z",
		"vendedor": "Deyverson Luís",
		"carro_id": 2,
		"vendedor_id": 4
	}
]
```

```javascript
[]
```

#### `PUT` `/vendas/:id`
Essa é a rota que será chamada quando o usuario logado quiser editar uma venda cadastrada no sistema.

Input:
```javascript
{
	"carro_id": 2,
	"valor": 156500,
	"data_venda": "2022-08-21",
	"vendedor_id": 2
}
```

Output (exemplos):
```javascript
{
	"mensagem": "Venda atualizada com sucesso!"
}
```

Output inválido (exemplos):
```javascript
{
    "mensagem": "Não autorizado. Por favor, efetue o login."
}
```
```javascript
{
    "mensagem": "Todos os campos são obrigatórios."
}
```
```javascript
{
    "mensagem": "O campo CARRO_ID precisa ser um número inteiro."
}
```
```javascript
{
    "mensagem": "O campo VALOR precisa ser um número positivo."
}
```
```javascript
{
    "mensagem": "O campo DATA_VENDA precisa ser um formato de data válido."
}
```
```javascript
{
    "mensagem": "O campo VENDEDOR_ID precisa ser um número inteiro."
}
```
```javascript
{
    "mensagem": "O carro não foi encontrado no sistema."
}
```
```javascript
{
    "mensagem": "O vendedor não foi encontrado no sistema."
}
```
```javascript
{
    "mensagem": "A venda não existe cadastrada no banco de dados."
}
```
```javascript
{
    "mensagem": "A venda não foi atualizada."
}
```

#### `DELETE` `/vendas/:id`
Essa é a rota que será chamada quando o usuario logado quiser excluir uma venda do sistema. 

Input:
```javascript
// Sem conteúdo no corpo (body) da requisição
```

Output (exemplos):
```javascript
{
	"mensagem": "Venda excluída com sucesso!"
}
```

Output inválido (exemplos):
```javascript
{
    "mensagem": "Não autorizado. Por favor, efetue o login."
}
```
```javascript
{
    "mensagem": "Todos os campos são obrigatórios."
}
```
```javascript
{
    "mensagem": "A venda não existe cadastrado no banco de dados do sistema."
}
```
```javascript
{
    "mensagem": "A venda não foi excluída"
}
```

#

## Links
- Deploy Heroku (URL Base): https://drivops-carros-js.herokuapp.com
- Repositório: https://github.com/lanziotti/drivops-carros-js/tree/master/BACKEND

## Contatos
- Email: rodrigolanziotti@yahoo.com.br
- LinkedIn: https://www.linkedin.com/in/rodrigo-lanziotti-16a64966/

## Versão
1.0.0

## Autor
**Rodrigo Lanziotti de Freitas**

#

Obrigado por visitar meu repositório...😎

...fique a vontade para entrar em contato quando quiser! 😉
