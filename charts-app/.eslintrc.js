module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-console": 0, // disallow use of console (off by default in the node environment)
    "comma-dangle": 0, // disallow trailing commas in object literals
    "no-cond-assign": 1, // disallow assignment in conditional expressions
    "no-const-assign": 2, // disallow assignment to const-declared variables
    "no-constant-condition": 0, // disallow use of constant expressions in conditions
    "no-control-regex": 1, // disallow control characters in regular expressions
    "no-debugger": 0, // disallow use of debugger
    "no-dupe-keys": 1, // disallow duplicate keys when creating object literals
    "no-ex-assign": 1, // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 1, // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": 0, // disallow unnecessary parentheses (off by default)
    "no-extra-semi": 1, // disallow unnecessary semicolons
    "no-func-assign": 1, // disallow overwriting functions written as function declarations
    "no-inner-declarations": 0, // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 1, // disallow invalid regular expression strings in the RegExp constructor
    "no-negated-in-lhs": 1, // disallow negation of the left operand of an in expression
    "no-obj-calls": 1, // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 1, // disallow multiple spaces in a regular expression literal
    "no-reserved-keys": 0, // disallow reserved words being used as object literal keys (off by default)
    "no-sparse-arrays": 1, // disallow sparse arrays
    "no-unreachable": 1, // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": 1, // disallow comparisons with the value NaN
    "valid-jsdoc": 0, // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": 1, // Ensure that the results of typeof are compared against a valid string
    "no-var": 1, // discouraging the use of var and encouraging the use of const or let instead
    "prefer-const": 2, // suggest using const
    "arrow-body-style": [2, "as-needed"], // require braces in arrow function body
    "no-param-reassign": [
      2,
      {
        props: false
      }
    ], // disallow reassignment of function parameters
    "space-before-function-paren": 0, // disallow a space before function parenthesis
    "global-require": 0, // enforce require() on the top-level module scope
    "class-methods-use-this": 0, // enforce that class methods utilize this
    "no-restricted-syntax": 0, // disallow specified syntax
    "array-callback-return": 0,
    "prefer-promise-reject-errors": 0,
    "import/no-extraneous-dependencies": 1,
    // Best Practices
    // These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.
    "block-scoped-var": 0, // treat var statements as if they were block scoped (off by default)
    complexity: 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": 0, // require return statements to either always or never specify values
    curly: 1, // specify curly brace conventions for all control statements
    "default-case": 0, // require default case in switch statements (off by default)
    "dot-notation": 1, // encourages use of dot notation whenever possible
    eqeqeq: [1, "allow-null"], // require the use of === and !==
    "guard-for-in": 0, // make sure for-in loops have an if statement (off by default)
    "no-alert": 1, // disallow the use of alert, confirm, and prompt
    "no-caller": 1, // disallow use of arguments.caller or arguments.callee
    "no-div-regex": 1, // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-else-return": 0, // disallow else after a return in an if (off by default)
    "no-eq-null": 0, // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": 1, // disallow use of eval()
    "no-extend-native": 1, // disallow adding to native types
    "no-extra-bind": 1, // disallow unnecessary function binding
    "no-fallthrough": 1, // disallow fallthrough of case statements
    "no-floating-decimal": 1, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": 1, // disallow use of eval()-like methods
    "no-labels": 1, // disallow use of labeled statements
    "no-iterator": 1, // disallow usage of __iterator__ property
    "no-lone-blocks": 1, // disallow unnecessary nested blocks
    "no-loop-func": 0, // disallow creation of functions within loops
    "no-multi-str": 0, // disallow use of multiline strings
    "no-native-reassign": 1, // disallow reassignments of native objects ???(0)
    "no-new": 1, // disallow use of new operator when not part of the assignment or comparison
    "no-new-func": 1, // disallow use of new operator for Function object
    "no-new-wrappers": 1, // disallows creating new instances of String,Number, and Boolean
    "no-octal": 1, // disallow use of octal literals
    "no-octal-escape": 1, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-proto": 1, // disallow usage of __proto__ property
    "no-redeclare": 0, // disallow declaring the same variable more then once
    "no-return-assign": 1, // disallow use of assignment in return statement
    "no-script-url": 1, // disallow use of javascript: urls.
    "no-self-compare": 1, // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": 1, // disallow use of comma operator
    "no-unused-expressions": 0, // disallow usage of expressions in statement position
    "no-void": 1, // disallow use of void operator (off by default)
    "no-warning-comments": 0, // disallow usage of configurable warning terms in comments": 1,                                    // e.g. TODO or FIXME (off by default)
    "no-with": 1, // disallow use of the with statement
    radix: 1, // require use of the second argument for parseInt() (off by default)
    "semi-spacing": 1, // require a space after a semi-colon
    "vars-on-top": 0, // requires to declare all vars on top of their containing scope (off by default)
    "wrap-iife": 0, // require immediate function invocation to be wrapped in parentheses (off by default)
    yoda: 1, // require or disallow Yoda conditions
    // Variables
    // These rules have to do with variable declarations.
    "no-catch-shadow": 1, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": 1, // disallow deletion of variables
    "no-label-var": 1, // disallow labels that share a name with a variable
    "no-shadow": [
      2,
      {
        hoist: "all",
        allow: ["resolve", "reject", "done", "next", "err", "error"]
      }
    ], // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 1, // disallow shadowing of names such as arguments
    "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undefined": 0, // disallow use of undefined variable (off by default)
    "no-undef-init": 1, // disallow use of undefined when initializing variables
    "no-unused-vars": [
      1,
      {
        vars: "all",
        args: "none",
        argsIgnorePattern: "res|next|^err"
      }
    ], // disallow declaration of variables that are not used in the code
    "no-use-before-define": 0, // disallow use of variables before they are defined
    // Node.js
    // These rules are specific to JavaScript running on Node.js.
    "handle-callback-err": 1, // enforces error handling in callbacks (off by default) (on by default in the node environment)
    "no-mixed-requires": 1, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    "no-new-require": 1, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    "no-path-concat": 1, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    "no-process-exit": 0, // disallow process.exit() (on by default in the node environment)
    "no-restricted-modules": 1, // restrict usage of specified node modules (off by default)
    "no-sync": 0, // disallow use of synchronous methods (off by default)
    // Stylistic Issues
    // These rules are purely matters of style and are quite subjective.
    "key-spacing": 0,
    "keyword-spacing": 1, // enforce spacing before and after keywords
    "jsx-quotes": [1, "prefer-double"],
    "comma-spacing": 0,
    "no-multi-spaces": 0,
    "brace-style": 0, // enforce one true brace style (off by default)
    camelcase: 0, // require camel case names
    "consistent-this": [1, "self"], // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": 1, // enforce newline at the end of file, with no multiple empty lines
    "func-names": 0, // require function expressions to have a name (off by default)
    "func-style": 0, // enforces use of function declarations or expressions (off by default)
    "new-cap": 0, // require a capital letter for constructors
    "new-parens": 1, // disallow the omission of parentheses when invoking a constructor with no arguments
    "no-nested-ternary": 0, // disallow nested ternary expressions (off by default)
    "no-array-constructor": 1, // disallow use of the Array constructor
    "no-lonely-if": 0, // disallow if as the only statement in an else block (off by default)
    "no-new-object": 1, // disallow use of the Object constructor
    "no-spaced-func": 1, // disallow space between function identifier and application
    "no-ternary": 0, // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": 1, // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0, // disallow dangling underscores in identifiers
    "no-mixed-spaces-and-tabs": 1, // disallow mixed spaces and tabs for indentation
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ], // specify whether double or single quotes should be used
    "quote-props": 0, // require quotes around object literal property names (off by default)
    semi: 1, // require or disallow use of semicolons instead of ASI
    "sort-vars": 0, // sort variables within the same declaration block (off by default)
    "space-in-brackets": 0, // require or disallow spaces inside brackets (off by default)
    "space-in-parens": 0, // require or disallow spaces inside parentheses (off by default)
    "space-infix-ops": 1, // require spaces around operators
    "space-unary-ops": [
      1,
      {
        words: true,
        nonwords: false
      }
    ], // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "max-nested-callbacks": 0, // specify the maximum depth callbacks can be nested (off by default)
    "one-var": 0, // allow just one var statement per function (off by default)
    "wrap-regex": 0, // require regex literals to be wrapped in parentheses (off by default)
    // Legacy
    // The following rules are included for compatibility with JSHint and JSLint. While the names of the rules may not match up with the JSHint/JSLint counterpart, the functionality is the same.
    "max-depth": 0, // specify the maximum depth that blocks can be nested (off by default)
    "max-len": 0, // specify the maximum length of a line in your program (off by default)
    "max-params": 0, // limits the number of parameters that can be used in the function declaration. (off by default)
    "max-statements": 0, // specify the maximum number of statement allowed in a function (off by default)
    "no-bitwise": 1, // disallow use of bitwise operators (off by default)
    "no-plusplus": 0, // disallow use of unary operators, ++ and -- (off by default)
    // React Plugin
    // The following rules are made available via `eslint-plugin-react`.
    "react/display-name": 1,
    "react/jsx-boolean-value": 0,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 1,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 0,
    "react/no-multi-comp": 0,
    "react/no-string-refs": 1,
    "react/no-danger": 0,
    "react/no-unknown-property": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 0,
    "react/prefer-stateless-function": 0, // enforce stateless React Components to be written as a pure function
    "react/forbid-prop-types": 0, // forbid certain propTypes
    "react/no-unescaped-entities": 0, // prevent invalid characters from appearing in markup
    // Import Plugin
    // The following rules are made available via `eslint-plugin-import`.
    "import/prefer-default-export": 0, // disallow named export when there is only a single export from a module
    "import/no-named-as-default": 0,
    import: 0,
    "import/no-dynamic-require": 0, // forbid require() calls with expressions
    "import/extensions": 0, // ensure consistent use of file extension within the import path
    // JSX-a11y Plugin
    // The following rules are made available via `eslint-plugin-jsx-a11y`.
    "react-a11/accessible-emoji": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ], // restrict file extensions that may contain JSX
    "jsx-a11y/click-events-have-key-events": 0, // Enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown, onKeyPress.
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"]
      }
    ],
    "jsx-a11y/label-has-for": 0, // DEPRECATED! Enforce label tags have associated control
    "jsx-a11y/label-has-associated-control": 0,
    // Prettier Plugin
    // The following rules are made available via `eslint-plugin-prettier`.
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: true,
        printWidth: 80
      }
    ]
  }
};
