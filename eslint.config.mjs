import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: "latest",
  sourceType: "module",
  project: "./tsconfig.json", } } },
  {languageOptions: { globals: globals.browser }},
  { extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];