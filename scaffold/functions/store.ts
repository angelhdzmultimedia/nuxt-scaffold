import inquirer from 'inquirer'
import { generateFile } from '../utils/generate-file'

export default async function (name: string, lang: string) {
  const capitalizedName: string = `${name[0].toUpperCase()}${name
    .substring(1)
    .toLowerCase()}`

  const storeName: string = `use${capitalizedName}Store`

  generateFile(
    'stores',
    `stores/${name}.${lang}`,
    `
import {defineStore} from 'pinia'

export const ${storeName} = defineStore('${name}', () => {
return {

}
})
`
  )
}
