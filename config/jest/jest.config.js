import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
export default {
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
    '^.+\\.(png|jpg|jpeg|gif|webp|ico|eot|otf|ttf|woff|woff2)$':
      '<rootDir>/config/jest/fileTransformer.js',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
  moduleNameMapper: {
    '^(?!src/|@?[/a-zA-Z]|\\.\\.?/)(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|webp|ico|eot|otf|ttf|woff|woff2)$':
      '<rootDir>/config/jest/fileTransformer.js',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
};
