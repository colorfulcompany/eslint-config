module.exports = {
  '*.js': (files) => `yarn run eslint ${files.join(' ')}`
}
