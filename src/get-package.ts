import path from 'path'
import fs from 'fs'

/**
 * 读取 package.json 文件内容
 * @param {String} dir 项目路径
 * @returns {Object}
 */
export default function (dir: string) {
  const packagePath = path.join(dir, 'package.json')

  let packageJson
  try {
    packageJson = fs.readFileSync(packagePath, 'utf-8')
  } catch (err) {
    throw new Error(`路径 '${packagePath}' 不存在 package.json 文件`)
  }

  try {
    packageJson = JSON.parse(packageJson)
  } catch (err) {
    throw new Error('package.json 文件解析失败')
  }

  return packageJson
}
