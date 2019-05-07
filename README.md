# # Validador de Cartão de Crédito

A finalidade da biblioteca é fazer a validação do cartão de crédito.


# Requisitos:

Node.js
npm

## Como instalar:

$ npm install cardvalidator-alramos

## Como utilizar:

```
node
> const test = require("cardvalidator-alramos")
>
> test.cardValidator("5545130775741024")
>
> // true
```
## Versão 1.0.0
```

Retorna true se um cartão de crédito é válido; false se não for.

> Não aceita letras
> Não aceita espaços
> Não aceita vazio
> Aceita apenas cartões com 16 dígitos completos
```

