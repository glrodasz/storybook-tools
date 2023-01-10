import 'jest-specific-snapshot';
import * as React from 'react';

import { describe, it, expect } from '@jest/globals';

import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import { getStoriesModules } from './getStoriesModules.js';
import { getSnapshotPath } from './getSnapshotPath.js';
import { STORIES_GLOB } from './constants.js';

export const createSnapshots = (storiesGlob = STORIES_GLOB) => {
  const storiesModules = getStoriesModules(storiesGlob);
  describe('[ storybook ]', () => {
    storiesModules?.forEach(({ module, filePath }) => {
      const { default: _default, ...stories } = module;
      const composedStories = composeStories(stories);

      describe(`[ ${_default.title} ]`, () => {
        Object.entries(composedStories).forEach(([story, Component]) => {
          it(`should render ${story}`, () => {
            const { asFragment } = render(<Component {..._default.args} />);
            const snapshotPath = getSnapshotPath(filePath);
            // @ts-ignore
            expect(asFragment()).toMatchSpecificSnapshot(snapshotPath);
          });
        });
      });
    });
  });
};
