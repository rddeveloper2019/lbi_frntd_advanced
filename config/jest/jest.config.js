/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  rootDir: '../../',
  modulePaths: ['<rootDir>/src'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      'babel-jest',
      {
        presets: [
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
          '@babel/preset-env',
          '@babel/preset-typescript',
        ],
        plugins: [],
      },
    ],
  },
  moduleNameMapper: {
    '^(?!src/|@?[/a-zA-Z]|\\.\\.?/)(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
};

module.exports = config;
