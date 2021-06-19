// exericios com map filter reduce
// filter renorna um array com o pares(Filter).
// Map retorna um array com o dobro dos valores(map)
// reduce some todos o numeros (reduce)
//  retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
    { nome: 'Luiz', idade: 10},
    { nome: 'Ana', idade: 20},
    { nome: 'Bruno', idade: 30},
    { nome: 'rodolfo', idade: 40},
    { nome: 'Antonio', idade: 50}

];

// const numerosFiltrados = numeros.filter(valor => valor > 10);
// const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const numerosFiltrados = numeros.filter((e)=> e > 10);
const numerosDobrados = numeros.map(valor => valor*2);


const nomeP = pessoas.map(function(valor) {
    return {idade: valor.idade}
});

const nomePe = pessoas.map(function(obj, indice) {
    obj.id = indice;
    return obj;
});

// retornando a pessoa mais velha
const maisVelha = pessoas.reduce(function(acumaldor, obj) {
    if( acumaldor.idade > obj.idade){
        return acumaldor
    }

    return obj;
});

// retornando a soma do dobro de todos os pares
const nPares = numeros.filter((e) => {
    if ( e % 2 === 0){
        return e
    }
});
//  console.log(nPares);

 const dobraValor =  nPares.map((val) => val*2);
//  console.log(dobraValor);

 const somaDobro =  dobraValor.reduce(function(acumaldor, valor){
    acumaldor += valor;
    return acumaldor
 });

//  console.log(somaDobro);

// console.log(maisVelha);


// console.log(numerosDobrados);

// console.log( 'numerosFiltrados: ', numerosFiltrados);

// console.log(numerosFiltrados);

// console.log(nomeP);
// console.log(nomePe);
