const musicas = [
  {
    nome: 'Patient Number 9',
    artistas: ['Ozzy Osbourne', 'Jeff Beck'],
  },
  {
    nome: 'ChainsawBlood',
    artistas: ['Vaundy'],
  },
  {
    nome: 'Take a chance on me',
    artistas: ['ABBA'],
  },
];

musicas.push(
  { nome: 'FEIN', artistas: ['Travis Scott', 'PlayBoy Carti'] },
  { nome: 'Hummingbird', artistas: ['Metro Boomin', 'James Blake'] }
);

for (musica of musicas) {
  console.log(musica);
}
