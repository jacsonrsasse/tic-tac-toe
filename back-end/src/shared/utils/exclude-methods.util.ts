export type ExcludeMethods<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : T[K];
};
