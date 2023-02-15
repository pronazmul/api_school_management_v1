const { readdirSync, unlinkSync } = require('fs')
const path = require('path')

const emptyDirectory = (dirName) => {
  let directory = path.join(__dirname, `./../../public/uploads/${dirName}/`)
  let files = readdirSync(directory)

  if (!files.length) return 0
  files.forEach((file) => unlinkSync(`${directory}/${file}`))
  return files.length
}

module.exports = emptyDirectory
