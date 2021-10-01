export function shortLongShort(a:string, b:string) {
    // your code here
    return a.length < b.length ? a + b + a : b + a + b;
  }