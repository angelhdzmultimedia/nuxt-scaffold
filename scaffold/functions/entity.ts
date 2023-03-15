import inquirer from 'inquirer'
import { capitalizeWords } from '../utils/capitalize'
import { generateFile } from '../utils/generate-file'

export default async function (name: string, lang: string) {
  const entityName: string = capitalizeWords(name.split(' '))

  const extendClass = await inquirer.prompt({
    name: 'value',
    type: 'input',
    message: 'Extends Class?',
  })

  const baseEntityName: string = capitalizeWords(extendClass.value.split(' '))
  const superCall: string = `
  constructor() {
    super()
  }`

  generateFile(
    'entities',
    `entities/${name}.${lang}`,
    `export class ${entityName}${
      extendClass.value ? ` extends ${baseEntityName} ` : ''
    } {${extendClass.value ? superCall : ''}
}
`
  )
}
