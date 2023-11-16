// 针对浏览器环境配置的接触jest内容 https://jestjs.io
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom', // 运行环境
  clearMocks: true,
  testPathIgnorePatterns: ['/.history/'],
  modulePathIgnorePatterns: ['<rootDir>/package.json'],
  resetMocks: false,
  setupFiles: [/* './jest.setup.js', */ 'jest-localstorage-mock'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }], // 对ts的解析
  },
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  collectCoverageFrom: [
    '<rootDir>/**/src/**/*.{js,jsx,ts,tsx}',
    '!**/demo/**',
    '!**/example/**',
    '!**/es/**',
    '!**/lib/**',
    '!**/dist/**',
  ],
  transformIgnorePatterns: ['^.+\\.js$'],
};
