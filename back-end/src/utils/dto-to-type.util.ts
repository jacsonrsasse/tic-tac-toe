export type DtoToType<T> = {
  [K in keyof T]: T[K];
};
