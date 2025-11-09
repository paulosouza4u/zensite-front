import {defineConfig, globalIgnores} from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        rules: {
            // aspas duplas
            quotes: ["error", "double", {avoidEscape: true}],
            // ponto e vírgula obrigatório
            semi: ["error", "always"],
            // espaço dentro de {} de objetos e imports
            "object-curly-spacing": ["error", "always"],
            // evita ambiguidades semicolons/ASi
            "no-unexpected-multiline": "error",
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;
