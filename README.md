# @privyid/eslint-config-ts
> Eslint shareable config for Typescript

## Usage

First, install all dependencies

**NPM**
```
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
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```
**Yarn**
```
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

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
