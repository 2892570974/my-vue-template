module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // Prevent <script setup> variables used in <template> to be marked as unused
    'vue/script-setup-uses-vars': 'error',
    // ↓禁止使用@ts-ignore来消除ESLint检查
    '@typescript-eslint/ban-ts-ignore': 'off',
    // ↓在函数和类方法上需要显式的返回类型
    '@typescript-eslint/explicit-function-return-type': 'off',
    // ↓禁止使用any类型
    '@typescript-eslint/no-explicit-any': 'off',
    // ↓除导入语句外，禁止使用require语句
    '@typescript-eslint/no-var-requires': 'off',
    // ↓禁止使用空函数
    '@typescript-eslint/no-empty-function': 'off',
    // ↓对自定义事件名称强制使用特定的大小写
    'vue/custom-event-name-casing': 'off',
    // ↓禁止定义前使用
    'no-use-before-define': 'off',
    // ↓在定义变量之前不允许使用变量
    '@typescript-eslint/no-use-before-define': 'off',
    // ↓禁止使用@ts-注解
    '@typescript-eslint/ban-ts-comment': 'off',
    // ↓禁止使用特定类型
    '@typescript-eslint/ban-types': 'off',
    // ↓禁止使用!后缀运算符进行非null断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // ↓在导出的函数和类的公共类方法上需要显式的返回值和参数类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // ↓禁止使用未使用的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // ↓禁止使用未使用的变量
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // ↓在函数括号前需要或不允许有空格
    'space-before-function-paren': 'off',
    // ↓强制属性顺序
    'vue/attributes-order': 'warn',
    // ↓强制每个组件应位于其自己的文件中
    'vue/one-component-per-file': 'off',
    // ↓在标签的右括号之前要求或不允许换行
    'vue/html-closing-bracket-newline': 'off',
    // ↓强制每行的最大属性数
    'vue/max-attributes-per-line': 'off',
    // ↓在多行元素的内容之前和之后需要换行
    'vue/multiline-html-element-content-newline': 'off',
    // ↓在单行元素的内容之前和之后需要换行
    'vue/singleline-html-element-content-newline': 'off',
    // ↓在模板中的自定义组件上实施属性命名样式
    'vue/attribute-hyphenation': 'off',
    // ↓需要props的默认值
    'vue/require-default-prop': 'off',
    // Require emits option with name triggered by $emit()
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
};
