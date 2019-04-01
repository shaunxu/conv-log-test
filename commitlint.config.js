module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ],
    rules: {
        'scope-empty': [
            2,
            'never'
        ],
        'scope-enum': [
            2,
            'always',
            [
                'a',
                'b',
                'c'
            ]
        ],
        'references-empty': [
            2,
            'never'
        ]
    }
}
