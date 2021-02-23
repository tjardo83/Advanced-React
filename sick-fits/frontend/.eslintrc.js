module.exports = {
  extends: ['eslint-config-wesbos/typescript.js'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  }
};
