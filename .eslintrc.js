module.exports = {
  extends: [
    "airbnb",
    "plugin:import/errors"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true
    }
  },
  plugins: ["react", "import", "jsx-a11y"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "consistent-return": [0],
    "no-console": [1],
    "max-len": [2, { code: 120 }],
    "react/jsx-filename-extension": [0],
    "react/destructuring-assignment": [0],
    "no-else-return": 0,
    "valid-typeof": 0
  }
};
