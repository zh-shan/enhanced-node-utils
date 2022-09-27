import path from 'path'

/**
 * 安全加载
 * @param {String} id 依赖
 * @param {String} dir 路径
 * @returns
 */
export default function (id: string, dir: string = __dirname) {
  if (id.startsWith(`.${path.sep}`) || id.startsWith(`..${path.sep}`)) {
    id = path.resolve(dir, id)
  }

  try {
    return require(id)
  } catch (err: any) {
    if (err.code === 'MODULE_NOT_FOUND' && ~err.message.indexOf(id)) {
      return undefined
    } else {
      throw err
    }
  }
}
