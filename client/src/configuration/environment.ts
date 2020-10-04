const isBeta = () => Boolean(process.env.REACT_APP_ENV === 'beta');
const isProduction = () => Boolean(process.env.REACT_APP_ENV === 'production');

export default {
  isBeta,
  isProduction,
};
