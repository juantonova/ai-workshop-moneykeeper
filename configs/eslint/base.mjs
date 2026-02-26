export const baseEslintConfig = [
  {
    ignores: ["node_modules/**", "**/dist/**", "**/coverage/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        console: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      "no-console": "off",
      "no-undef": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
