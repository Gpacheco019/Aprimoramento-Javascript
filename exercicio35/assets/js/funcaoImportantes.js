pessoa = {
    nome: "Rebeca",
    idade: 15,
    peso: 60
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => console.log(`${chave}: ${valor}`));


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '08/10/1993'
})

pessoa.dataNascimento = '01/02/1993';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2);
console.log(obj);


// ==================================

const produto = { nome: 'Produto', preco: 1.8 };
const caneca = Object.assign({}, produto);

console.log(produto);