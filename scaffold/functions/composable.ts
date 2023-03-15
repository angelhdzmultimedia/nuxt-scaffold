import inquirer from 'inquirer'
import { generateFile } from '../utils/generate-file'

export default async function (name: string, lang: string) {
  const capitalizedName: string = `${name[0].toUpperCase()}${name
    .substring(1)
    .toLowerCase()}`

  const composableName: string = `use${capitalizedName}`

  generateFile(
    'composables',
    `composables/${name}.${lang}`,
    `
export const ${composableName} = () => {
  return {

  }
}
`
  )
}
