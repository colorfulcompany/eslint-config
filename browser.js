module.exports = {
  extends: './base',
  env: {
    browser: true,
    node: true, // In consideration of using the build tool.
    es2017: true,
    es2020: false,
    es2021: false
  },
  parserOptions: {
    ecmaVersion: 2017
  }
}
