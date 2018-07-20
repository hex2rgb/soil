"use strict"

module.exports = {
    "files": ["./src/**/*.scss", "./src/**/*.vue"],
    "extends": "stylelint-config-standard",
    "rules": {
        "indentation": 4,
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["/^./"]
        }],
        // 类名命名
        "selector-class-pattern": ["^[a-z0-9\_\-]+$"],
        "selector-id-pattern": ["^[a-z0-9\_\-]+$"],
        // @chartset @media
        "at-rule-name-case": "lower",
        // function name
        "function-name-case": "lower",
        "at-rule-empty-line-before": "never",
        "selector-max-id": 2,
        "selector-max-class": 4,
        "rule-empty-line-before": ["always", {
            "except": ["inside-block"]
        }],
        "selector-pseudo-element-colon-notation": "single"
    }
}
