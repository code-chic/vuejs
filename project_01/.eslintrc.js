module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue', 'html'],
  rules: {
    'prettier/prettier': 'error',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
