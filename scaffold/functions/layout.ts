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

  const layout = await inquirer.prompt({
    name: 'value',
    type: 'list',
    choices: [
      {
        name: 'Default',
        value: 'default',
        key: 'default',
      },
      {
        name: 'Quasar',
        value: 'quasar',
        key: 'quasar',
      },
    ],
  })

  const layoutName: string = `${name[0].toUpperCase()}${name
    .substring(1)
    .toLowerCase()} Layout`

  let layoutString = `
  `

  if (layout.value === 'quasar') {
    layoutString = `<q-layout>
  <q-page-container>
    <q-page>
      <slot/>
    </q-page>
  </q-page-container>
</q-layout>
`
  }
  if (layout.value === 'default') {
    layoutString = `
<main>
  <slot/>
</main>
      `
  }

  generateFile(
    'layouts',
    `layouts/${name}.vue`,
    `
<script ${setup.value ? 'setup ' : ''}lang="${lang}">
</script>

<template>
  ${layoutString}
</template>
`
  )
}
