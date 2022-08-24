const fs = require('fs')
const path = require('path')

module.exports = function () {
  let dir = process.cwd()

  while (dir.length && dir[dir.length - 1] !== path.sep) {
    if (
      fs.existsSync(path.join(dir, 'package.json'))
    ) {
      return dir
    }

    dir = path.normalize(path.join(dir, '..'))
  }
}
