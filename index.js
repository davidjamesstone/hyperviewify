const through = require('through2')
const hyperviews = require('hyperviews')

module.exports = function (file, options) {
  const ext = options.ext || 'html'
  const exp = new RegExp('.' + ext + '$', 'i')

  if (!exp.test(file)) {
    return through()
  }

  return through(function (buf, enc, next) {
    this.push(hyperviews(buf, 'cjs', options.name, options.args))
    next()
  })
}
