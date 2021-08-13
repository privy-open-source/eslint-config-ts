module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@privyid/eslint-config-js',
  ],
  plugins      : ['@typescript-eslint'],
  parserOptions: {
    parser    : '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          VariableDeclarator       : true,
          AssignmentExpression     : true,
          ClassProperty            : true,
          TSImportEqualsDeclaration: true,
          Program                  : true,
        },
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline    : true,
          minProperties: 3,
        },
        ExportDeclaration: 'always',
        ImportDeclaration: {
          multiline    : true,
          minProperties: 3,
        },
        ObjectPattern: {
          multiline    : true,
          minProperties: 3,
        },
      },
    ],
    'camelcase'                                       : 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define'         : 'off',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires'               : 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-unused-vars'                                   : 'off',
        '@typescript-eslint/no-unused-vars'                : ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/ban-ts-ignore'                 : 'off',
        '@typescript-eslint/no-explicit-any'               : 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['**/*.vtpw.ts'],
      rules: {
        'unicorn/filename-case': 'off',
        'spaced-comment'       : 'off',
      },
    },
    {
      files: ['src/pages/**/*.vue', 'src/layouts/**/*.vue'],
      rules: { 'unicorn/filename-case': ['error', { case: 'kebabCase' }] },
    },
    {
      files  : ['**/*.spec.js', '**/*.spec.ts'],
      env    : { jest: true, node: true },
      globals: {
        page         : true,
        browser      : true,
        context      : true,
        jestPuppeteer: true,
      },
    },
  ],
}
