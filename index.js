const pessoa = 'Pedro';
const idade = 20;
const investimento1 = 50000;
const investimento2 = 50000;
const vegetariano = false;
const vegano = true;

if (idade >= 18) {
  console.log('Pessoa ' + pessoa + ' é  maior de idade');
} else {
  console.log('Pessoa ' + pessoa + ' não é maior de idade');
}

if (investimento1 + investimento2 >= 100000) {
  console.log(pessoa + ' é um investidor qualificado');
} else {
  console.log('Pobre');
}

if (vegetariano === true || vegano === true) {
  console.log(pessoa + ' possui restição alimentar');
} else {
  console.log('Esta pessoa não possui restrições alimentares');
}
