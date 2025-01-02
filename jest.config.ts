import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  // collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**', '!<rootDir>/src/**/*-protocols.ts', '!**/protocols/**', '!**/test/**'],
  coverageDirectory: 'coverage',
  // coverageProvider: "v8",
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}

export default config
