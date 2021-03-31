# @privyid/eslint-config-ts
> Eslint shareable config for Typescript

## Usage

First, install all dependencies

**NPM**
```bash
npm install --save-dev \
  eslint \
  babel-eslint \
  eslint-config-standard \
  eslint-plugin-import \
  eslint-plugin-node \
  eslint-plugin-promise \
  eslint-plugin-standard \
  eslint-plugin-unicorn \
  eslint-plugin-varspacing \
  eslint-plugin-vue \
  eslint-config-adenvt \
  @privyid/eslint-config-ts \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```
**Yarn**
```bash
yarn add --dev \
  eslint \
  babel-eslint \
  eslint-config-standard \
  eslint-plugin-import \
  eslint-plugin-node \
  eslint-plugin-promise \
  eslint-plugin-standard \
  eslint-plugin-unicorn \
  eslint-plugin-varspacing \
  eslint-plugin-vue \
  eslint-config-adenvt \
  @privyid/eslint-config-ts \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```


Then, add this to your `.eslintrc` file (create one if doesn't exist):

```jsonc
{
  "extends": "@privyid/eslint-config-ts"
}
```

Optional, add this to `package.json` script's
```jsonc
{
  // ...
  "scripts": {
    // ...
    "lint:js": "eslint --ext .ts,.js,.vue --ignore-path .gitignore .",
    "fix:js": "eslint --fix --ext .ts,.js,.vue --ignore-path .gitignore .",
    // ...
  }
  // ...
}
```

## Lint on commit
If you run linting every commit, you can use [pre-commit] and [lint-staged]
```bash
# NPM
npm install --save-dev pre-commit lint-staged

# Yarn
yarn add --dev pre-commit lint-staged
```

and this to your `package.json`
```jsonc
{
  // ...
  "scripts": {
    // ...
    "precommit": "lint-staged",
    // ...
  },
  // ...
  "precommit": ["precommit"],
  "lint-staged": {
    "*.(js|ts|vue)": [
      "eslint --fix"
    ],
    // ...
  },
  // ...
}
```
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[pre-commit]: https://www.npmjs.com/package/pre-commit
[lint-staged]: https://www.npmjs.com/package/lint-staged
