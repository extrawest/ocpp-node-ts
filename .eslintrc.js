module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "import/prefer-default-export": 0,
    "@typescript-eslint/indent": 0,
    "max-len": "warn"
  }
};
