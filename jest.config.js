module.exports = {
  testEnvironment: 'jsdom',
  transform: {
  '^.+\\.[jt]sx?$': 'babel-jest',
},

moduleDirectories: ['node_modules', 'src'],
moduleNameMapper: {
  '\\.(css|jpg|jpeg|png|svg)$': 'identity-obj-proxy',
},
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
