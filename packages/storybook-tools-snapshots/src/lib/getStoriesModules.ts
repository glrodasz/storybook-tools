import * as glob from 'glob'

import { getStoryPaths } from './getStoryPaths'

export const getStoriesModules = (globPath: string): { module: any; filePath: string;}[] | void => {
  try {
    return glob.sync(globPath).map((filePath) => ({
      module: require(getStoryPaths(filePath).resolvedFilePath),
      filePath,
    }))
  } catch (error) {
    console.error('Error reading story files using a glob pattern', error)
  }
}
