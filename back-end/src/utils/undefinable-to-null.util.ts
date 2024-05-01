type UndefinableToNull<T> = {
  [K in keyof T]: T[K] extends undefined ? null : T[K];
};

export function convertUndefinedPropertiesToNull<T>(
  obj: T
): UndefinableToNull<T> {
  const result = {} as UndefinableToNull<T>;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      result[key] = value === undefined ? null : (value as any);
    }
  }

  return result as UndefinableToNull<T>;
}
