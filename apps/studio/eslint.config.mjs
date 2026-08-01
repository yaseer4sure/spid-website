import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: [".sanity/**", "dist/**", "schema.json", "static/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
);
