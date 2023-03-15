import inquirer from 'inquirer'
import { generateFile } from '../utils/generate-file'

export default async function (name: string, lang: string) {
  const setup: { value: string } = await inquirer.prompt({
    name: 'value',
    type: 'list',
    message: 'With <script setup> ?',
    choices: [
      {
        name: 'Yes',
        value: true,
      },
      {
        name: 'No',
        value: false,
      },
    ],
  })

  const pageName: string = `${name[0].toUpperCase()}${name
    .substring(1)
    .toLowerCase()} Page`

  generateFile(
    'pages',
    `pages/${name}.vue`,
    `
<script ${setup.value ? 'setup ' : ''}lang="${lang}">
</script>

<template>
<main>
  <span>${pageName}</span>
</main>
</template>
`
  )
}
