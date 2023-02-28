//Altere o código a seguir para utilizando a melhor HOF de modo que a saída permaneça a mesma.

const numeros = [0, 1, 2, 3, 4, 5];
// for (let i = 0; i <= numeros.length; i++) {
//   if (i % 2 === 0) {
//     console.log(i + ' é par');
//   } else {
//     console.log(i + ' é ímpar');
//   }
// }

numeros.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element + ' é par');
  } else {
    console.log(element + ' é ímpar');
  }
});
//--------------------------

//Utilizando o melhor método, escreva a função dobrar que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.

// Exemplo: dobrar([1,2,3]) → [2,4,6]

function dobrar(numero) {
  const numeroInt = numero.map((element)=> {
    return element*2 
  }) 
return numeroInt
  }

console.log(dobrar([1,2,3]))
//--------------------------

// Dada uma lista de objetos que contém o nome de um aluno e sua média final, a média da escola é 6. Implemente a função 'aprovados' que recebe esta lista e retorna somente os nomes dos alunos que foram aprovados.

// Para isto, utilize o melhor método.

const alunos = [{
    nome: 'Diogo',
    media: 5.5
  },
  {
    nome: 'Julia',
    media: 9.5
  },
  {
    nome: 'Roberto',
    media: 1.5
  },
  {
    nome: 'Tiago',
    media: 6.0
  }
];
function aprovados(lista){
const lista_aprovados = lista.filter((aluno) => {
 return aluno.media >= 6
}) 
return lista_aprovados.map((aluno)=> {
  return aluno.nome
})
}
console.log(aprovados(alunos))