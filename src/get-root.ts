import path from 'path'
import fs from 'fs'

/**
 * 获取项目根目录
 * @returns {String} 根目录的路径
 */
export default function () {
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
