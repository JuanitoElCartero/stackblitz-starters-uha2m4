const compararNumeros = (a, b, c) => {
  const mayor = Math.max(a, b, c);

  let repetidos = '';
  if (a === b || a === c) {
    repetidos += a + ' ';
  }
  if (b === c) {
    repetidos += b + ' ';
  }

  repetidos = repetidos.trim();

  return {
    mayor,
    repetidos: repetidos.length > 0 ? repetidos : 'No hay repeticiones',
  };
};

const a = 45;
const b = 67;
const c = 45;
const resultado = compararNumeros(a, b, c);

document.write(`El número mayor es ${resultado.mayor}.<br>`);
document.write(`Números que se repiten: ${resultado.repetidos}.`);
