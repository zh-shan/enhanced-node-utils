const path = require('path')

module.exports = (id) => {
  if (id.startsWith(`.${path.sep}`) || id.startsWith(`..${path.sep}`)) {
    id = path.resolve(path.dirname(module.parent.filename), id)
  }

  try {
    return require(id)
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND' && ~err.message.indexOf(id)) {
      return undefined
    } else {
      throw err
    }
  }
}
