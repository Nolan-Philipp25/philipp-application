const react = require('eslint-plugin-react')
const globals = require('globals')

module.exports = [
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        plugins: {
            react,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            // ... any rules you want
            'consistent-return': 2,
            indent: [1, 4],
            'no-else-return': 1,
            semi: [1, 'always'],
            'space-unary-ops': 2,
            'no-unused-vars': 'off',
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
        },
        // ... others are omitted for brevity
    },
]
