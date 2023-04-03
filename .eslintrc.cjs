module.exports = {
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,

    rules: {
        // '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
    },
}
