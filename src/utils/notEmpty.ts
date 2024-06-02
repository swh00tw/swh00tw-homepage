export function notEmpty<T>(val: T | null | undefined): val is T {
  return val !== null && val !== undefined;
}
