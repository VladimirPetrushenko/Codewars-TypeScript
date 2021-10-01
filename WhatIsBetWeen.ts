export function between(a: number, b: number): number[] {
    return [...Array(b - a + 1).keys()].map(x => x = x + a);
  }

  export function between2(a: number, b: number): number[] {
    return Array.from({length: b - a + 1}, (_, x) => x + a);
  }