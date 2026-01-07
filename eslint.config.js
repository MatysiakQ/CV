import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsel from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

// Flat config compatible replacement. Uses @typescript-eslint plugin/parser
// and keeps the original project rules (react-hooks + react-refresh tweak).
export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
      parser,
    },
    plugins: {
      "@typescript-eslint": tsel,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
