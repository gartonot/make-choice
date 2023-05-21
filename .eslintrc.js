module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'warn',
      {
        vueIndentScriptAndStyle: true,
        printWidth: 100,
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
        endOfLine: 'auto'
      }
    ]
  }
}
