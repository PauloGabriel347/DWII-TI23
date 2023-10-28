const paises = [
  {
    pais: 'br',
    medalhas: [
      {
        tipo: 'ouro',
        ganhadores: [
          {
            nome: 'felipe',
            esporte: 'volei',
          },
        ],
      },
      {
        tipo: 'prata',
        ganhadores: [
          {
            nome: 'mathias',
            esporte: 'atletismo',
          },
        ],
      },
      {
        tipo: 'bronze',
        ganhadores: [
          {
            nome: 'michael',
            esporte: 'futebol',
          },
        ],
      },
    ],
  },
  {
    pais: 'eua',
    medalhas: [
      {
        tipo: 'ouro',
        ganhadores: [
          {
            nome: 'felipe',
            esporte: 'basquete',
          },
        ],
      },
      {
        tipo: 'prata',
        ganhadores: [],
      },
      {
        tipo: 'bronze',
        ganhadores: [],
      },
    ],
  },
  {
    pais: 'nova zelandia',
    medalhas: [
      {
        tipo: 'ouro',
        ganhadores: [],
      },
      {
        tipo: 'prata',
        ganhadores: [],
      },
      {
        tipo: 'bronze',
        ganhadores: [],
      },
    ],
  },
];

const paisesGanhadores = paises.filter((pais) => {
  const ganhadores = pais.medalhas.some((medalha) => {
    if (medalha.ganhadores.length >= 1) {
      return medalha;
    }
  });
  return ganhadores;
});

const quantidadeMedalhas = paises.map((pais) => {
  let ganhadores = pais.medalhas.some((medalha) => {
    let conta = 0;
    conta = conta + medalha.ganhadores.length;
    console.log(conta);
    return ganhadores;
  });
});
