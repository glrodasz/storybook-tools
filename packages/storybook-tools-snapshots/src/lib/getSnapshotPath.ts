import { SNAPSHOTS_FOLDER, SNAPSHOT_EXT} from './constants.js'

import { getStoryPaths } from './getStoryPaths.js'
import { getComponentNameStoryFilePath } from './getComponentNameStoryFilePath.js'

export const getSnapshotPath = (filePath: string) : string => {
  const { dirnamePath } = getStoryPaths(filePath)
  const componentName = getComponentNameStoryFilePath(filePath)

  return `${dirnamePath}/${SNAPSHOTS_FOLDER}/${componentName}${SNAPSHOT_EXT}`
}
