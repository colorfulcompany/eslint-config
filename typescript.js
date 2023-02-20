module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: ['**/@types/**'],
      rules: {
        'import/no-default-export': 'off'
      }
    },
    {
      files: ['*.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ]
}
