export const isBeta = () => Boolean(process.env.REACT_APP_ENV === 'beta');
export const isProduction = () => Boolean(process.env.REACT_APP_ENV === 'production');
