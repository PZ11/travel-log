module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  
  extends: [
    'airbnb-base',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")], // https://stackoverflow.com/q/39114446/2771889
  },
};
