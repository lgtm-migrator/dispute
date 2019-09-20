export const toTuples = <T> (obj: Record<string, T>): Array<{k: string, v: T}> => {
  const r = [];
  const props = Object.keys(obj);
  for (let q = 0, len = props.length; q < len; q++) {
    const k = props[q];
    const v = obj[k];
    r.push({k, v});
  }
  return r;
};
