module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/alt-text': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0,
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'jsx-quotes': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-cycle': 'off',
    'import/prefer-default-export': 0,
    'linebreak-style': 'off',
    'arrow-body-style': 'off',
    'react/function-component-definition': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-curly-newline': 'off',
    'no-confusing-arrow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'operator-linebreak': 'off',
    'no-console': 'off',
  },
};
