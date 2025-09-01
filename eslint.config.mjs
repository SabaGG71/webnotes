import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js + TypeScript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ჩვენი დამატებითი კონფიგურაციები
  {
    // გამორიცხე Prisma-ს გენერირებული ფაილები
    ignores: ["app/generated/prisma/**"],

    rules: {
      // გამორთე `require()`-ის აკრძალვა, უბრალოდ case-ში თუ ისევ დაგჭირდა
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;
