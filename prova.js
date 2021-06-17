// Questão 1

function someFun(parametros, callback) {
  callback(parametros.someProperty)

  return 1
}

// Questão 2

function someFn(numero) {
  const returnFunction = (valor) => {
    switch (valor) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return returnFunction
}

// Questão 3

function calculator(n1, n2) {
  return callback => {
    return callback(n1, n2)
  }
}

// Questão 4

/**
 * ordem:
 * 4
 * 1
 * 5
 * 1
 */

// Questão 5

function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`)
  }
}
