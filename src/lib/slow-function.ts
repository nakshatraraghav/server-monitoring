function randomValue(array: number[]): number {
  const idx = Math.floor(Math.random() * array.length);

  return array[idx];
}

const delay = [50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

export function slowFunction() {
  const ms = randomValue(delay);

  const shouldThrow = Math.floor(Math.random() * 1000) % 2 !== 0;

  if (shouldThrow) {
    throw new Error();
  }

  return new Promise((resolve, _) => setTimeout(() => resolve(ms), ms));
}
