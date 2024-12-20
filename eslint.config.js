// import pluginVue from 'eslint-plugin-vue'
// import vueTsEslintConfig from '@vue/eslint-config-typescript'
// import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// export default [
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{ts,mts,tsx,vue}'],
//   },

//   {
//     name: 'app/files-to-ignore',
//     ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
//   },

//   ...pluginVue.configs['flat/essential'],
//   ...vueTsEslintConfig(),
//   skipFormatting,
// ]
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['vue', '@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  rules: {
    // 你可以根据需要自定义 ESLint 规则
  }
};
