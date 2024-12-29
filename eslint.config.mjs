import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default compat.config({
  extends: [
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react/recommended", // Example of adding a React plugin
    // "plugin:prettier/recommended", // Adding Prettier plugin
  ],
});