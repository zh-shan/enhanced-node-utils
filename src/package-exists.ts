import path from 'path'
import fs from 'fs'

/**
 * 判断是否安装依赖包
 * @param {String} packageName 依赖包
 * @param {String} dir 路径
 * @returns {Boolean}
 */
export default function (packageName: string, dir: string = __dirname) {
  if (process.versions.pnp) {
    return true
  }

  do {
    try {
      if (fs.statSync(path.join(dir, 'node_modules', packageName)).isDirectory()) {
        return true
      }
    } catch (_error) {
      // Nothing
    }
  } while (dir !== (dir = path.dirname(dir)))

  return false
}
