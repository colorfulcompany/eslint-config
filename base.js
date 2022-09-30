module.exports = {
  extends: [
    'standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'import/no-default-export': 'error'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'import/no-default-export': 'off'
      }
    },
    {
      files: ['*.*'],
      excludedFiles: ['**/*.spec.*'],
      extends: [
        'plugin:jsdoc/recommended'
      ],
      rules: {
        'jsdoc/require-jsdoc': [
          process.env.CI === 'true' ? 'warn' : 'error',
          {
            require: {
              ArrowFunctionExpression: true,
              ClassDeclaration: true,
              ClassExpression: true,
              FunctionDeclaration: true,
              FunctionExpression: true,
              MethodDefinition: true
            }
          }
        ]
      }
    }
  ]
}
