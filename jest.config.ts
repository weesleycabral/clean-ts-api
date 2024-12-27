import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  // collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src'],
  coverageDirectory: "coverage",
  // coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }

};

export default config;
