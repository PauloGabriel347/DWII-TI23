const arquivos = [
  {
    id: 1,
    nome: 'Meu Trabalho v1',
    excluido: false,
  },
  {
    id: 2,
    nome: 'Meu Trabalho v2',
    excluido: false,
  },
  {
    id: 3,
    nome: 'Meu Trabalho v3',
    excluido: false,
  },
  {
    id: 4,
    nome: 'Meu Trabalho v4',
    excluido: true,
  },
];

const inversao = arquivos.map((arquivo) => {
  if (arquivo.excluido === true) {
    arquivo.excluido = false;
  } else {
    arquivo.excluido = true;
  }
  return arquivo;
});

console.log(inversao);
