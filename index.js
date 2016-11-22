module.exports = {
    parser: 'babel-eslint',
    extends: 'eslint-config-airbnb-base',
    env: {
        browser: true,
        jquery: true
    },
    globals: {
        StateManager: true,
        StorageManager: true,
        controller: true,
        picturefill: true,
        themeConfig: true,
        lastSeenProductsConfig: true,
        snippets: true,
        Modernizr: true,
        timeNow: true
    },
    rules: {
        indent: ['error', 4],
        'keyword-spacing': ['error', {
            before: true,
            after: false,
            overrides: {
                else: { after: true },
                from: { after: true }
            }
        }],
        'no-underscore-dangle': 0,
        'arrow-parens': ['error', 'as-needed'],
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.config.js'
            }
        },
        'import/ignore': [
            /^shopware\//
        ]
    }
};
