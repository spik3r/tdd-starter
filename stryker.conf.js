/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "mocha",
  coverageAnalysis: "off",
  tsconfigFile: "./tsconfig.json",
  mutate: ["src/**/*.ts", "!src/**/*.test.ts", "!reportWebVitals.ts"],
  mochaOptions: {
    spec: ['**/*.test.ts'],
    require: ['ts-node/register'],
  },
};
