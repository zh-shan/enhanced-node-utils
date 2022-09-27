const path = require('path')
const fs = require('fs')

function getPackageJson (projectPath) {
  const packagePath = path.join(projectPath, 'package.json')

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

module.exports = getPackageJson
