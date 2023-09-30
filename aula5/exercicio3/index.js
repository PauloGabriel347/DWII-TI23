const filmesArray = [
  {
    nome: 'wild wild west',
    anoLancamento: 1999,
    atores: ['Will Smith', 'Salma Hayek'],
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmYyMTc4YjItMGNhNC00OWQwLWJhMWUtNTdjZDgxMDI5MjE2L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
  },
  {
    nome: 'Besouro Azul',
    anoLancamento: 2023,
    atores: ['Bruna Marquezine', 'George Lopez'],
    poster: '',
  },
  {
    nome: 'Speed Racer',
    anoLancamento: 2008,
    atores: ['Christina Ricci', 'John Goodman'],
    poster: '',
  },
];

const id = document.querySelector('#filmes');

for (filme of filmesArray) {
  const img = document.createElement('img');
  img.src = filme.poster;
  filmes.appendChild(img);

  const br = document.createElement('br');
  filmes.appendChild(br);

  const p = document.createElement('p');
  p.textContent = 'Nome:';
  filmes.appendChild(p);

  const spam = document.createElement('spam');
  spam.textContent = filme.nome;
  filmes.appendChild(spam);

  filmes.appendChild(br);
}
