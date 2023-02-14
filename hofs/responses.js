//1
const numeros = [0, 1, 2, 3, 4, 5];

numeros.forEach((e, i) => {
  i % 2 === 0 ? console.log(`${e} é par`) : console.log(i + ' é ímpar')
})

//2
function dobrar(array) {
  return array.map((e) => e * 2)
}
console.log(dobrar([1, 2, 3]));

//3
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

function aprovados() {
  return alunos.filter((e) => e.media >= 6.0).map((e) => e.nome)
}

console.log(aprovados());