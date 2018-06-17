import brain from 'brain.js';
import colors from './colors';

/**
 * Convert a hexidecimal color string to RGB, dive it by 255
 * and keep 2 decimals only
 *
 * @param {String} hex
 */
function hexToRGB(hex) {
  var r = ((hex >> 16) / 255).toFixed(2);
  var g = ((hex >> 8 & 0xFF) / 255).toFixed(2);
  var b = ((hex & 0xFF) / 255).toFixed(2);

  return {r, g, b};
}

function main() {
  const network = new brain.NeuralNetwork();
  network.train(colors);

  const input = document.querySelector('#picker');
  const container = document.querySelector('.container');

  input.addEventListener('input', (e) => {
    const color = e.target.value;
    const rgb = hexToRGB(parseInt(color.substring(1), 16));
    const result = brain.likely(rgb, network);

    container.style.background = color;
    container.style.color = result === 'dark' ? '#ffffff' : '#000000';
  });
}

main();
