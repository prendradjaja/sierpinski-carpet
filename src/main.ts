import './style.css'

type Vector = [number, number];
type Position = Vector;

const canvas = document.querySelector('canvas')!;
const ctx = canvas.getContext('2d')!;

const baseSize = 2;

function main() {
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  ctx.fillStyle = 'blue';

  drawSierpinskiCarpet([10, 10], 6);
}

function drawSierpinskiCarpet(
  position: Position,
  order: number,
) {
  if (order <= 0) {
    return;
  } if (order === 1) {
    ctx.fillRect(
      position[0],
      position[1],
      baseSize,
      baseSize
    );
  } else {
    const size = 3 ** (order - 2) * baseSize;

    drawSierpinskiCarpet(position,            order - 1);
    drawSierpinskiCarpet(addVectors(position, [size,     0]), order - 1);
    drawSierpinskiCarpet(addVectors(position, [size * 2, 0]), order - 1);

    drawSierpinskiCarpet(addVectors(position, [0,        size]), order - 1);
    drawSierpinskiCarpet(addVectors(position, [size * 2, size]), order - 1);

    drawSierpinskiCarpet(addVectors(position, [0,        size * 2]), order - 1);
    drawSierpinskiCarpet(addVectors(position, [size,     size * 2]), order - 1);
    drawSierpinskiCarpet(addVectors(position, [size * 2, size * 2]), order - 1);
  }
}

function addVectors(
  v: Vector,
  w: Vector,
): Vector {
  return [
    v[0] + w[0],
    v[1] + w[1],
  ]
}

main();
