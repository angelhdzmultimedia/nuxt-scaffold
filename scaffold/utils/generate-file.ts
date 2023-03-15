import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

export function generateFile(
  basePath: string,
  path: string,
  content: string
): void {
  let _basePath = ''
  const basePaths: string[] = basePath.split('/')

  for (const basePath of basePaths) {
    const _fullBasePath: string = `${_basePath}${basePath}`
    if (!existsSync(_fullBasePath)) {
      mkdirSync(_fullBasePath)
      _basePath += `${basePath}/`
    }
  }
  writeFileSync(path, content)
}
