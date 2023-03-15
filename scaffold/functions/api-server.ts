import inquirer from 'inquirer'
import { generateFile } from '../utils/generate-file'

export default async function (name: string, lang: string) {
  generateFile(
    'server/api',
    `server/api/${name}.${lang}`,
    `
export default defineEventHandler((event) => {

})
`
  )
}
