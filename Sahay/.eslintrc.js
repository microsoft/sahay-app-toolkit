module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
          "prefixWithI": "always"
      }
  ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    'array-bracket-newline': ['warn', 'consistent'],
    'array-element-newline': ['warn', 'consistent'],
    'no-console': 2,
    'no-multiple-empty-lines': [2, {max: 1, maxEOF: 1, maxBOF: 1}],
  },
};
