const filmesArray = [
  {
    nome: 'wild wild west',
    anoLancamento: 1999,
    atores: ['Will Smith', 'Salma Hayek'],
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmYyMTc4YjItMGNhNC00OWQwLWJhMWUtNTdjZDgxMDI5MjE2L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
  },
  {
    nome: 'Homem-Aranha: Através do Aranhaverso',
    anoLancamento: 2023,
    atores: ['Oscar Isaac', 'Shameik Moore'],
    poster: 'https://assets-prd.ignimgs.com/2023/05/26/spider-man-across-the-spider-verse-chinese-poster-1685120998779.jpg',
  },
  {
    nome: 'Speed Racer',
    anoLancamento: 2008,
    atores: ['Christina Ricci', 'John Goodman'],
    poster: 'https://i.pinimg.com/736x/82/00/7e/82007e0b8f7e53e4b7db1ac358286137.jpg',
  },
];

const d = new Date();
let ano = d.getFullYear();

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
  
  const p2 = document.createElement('p2');
  p2.textContent = 'Idade:';
  filmes.appendChild(p2);
  
  const idade = document.createElement('idade');
  idade.textContent = ano - filme.anoLancamento;
  filmes.appendChild(idade);
  
  filmes.appendChild(br);

  
}
