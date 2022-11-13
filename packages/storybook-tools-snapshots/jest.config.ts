/* eslint-disable */
export default {
  displayName: 'storybook-tools-snapshots',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/storybook-tools-snapshots',
};
