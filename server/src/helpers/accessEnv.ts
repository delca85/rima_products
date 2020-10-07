const cache: { [key: string]: any } = {};

export const setCacheValue = (key: string, value: any) => (cache[key] = value);
export const getCacheValue = (key: string): any => cache[key];

const accessEnv = (key: string, defaultValue?: any) => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env!`);
  }

  const cacheValue = getCacheValue(key);
  if (cacheValue) return cacheValue;

  setCacheValue(key, process.env[key]);
  return process.env[key];
};

export default accessEnv;
