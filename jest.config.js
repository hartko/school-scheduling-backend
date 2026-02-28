import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',  // looks for *.spec.ts files
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};

export default config;