import { SNAPSHOTS_FOLDER, SNAPSHOT_EXT} from './constants'

import { getStoryPaths } from './getStoryPaths'
import { getComponentNameStoryFilePath } from './getComponentNameStoryFilePath'

export const getSnapshotPath = (filePath: string) : string => {
  const { dirnamePath } = getStoryPaths(filePath)
  const componentName = getComponentNameStoryFilePath(filePath)

  return `${dirnamePath}/${SNAPSHOTS_FOLDER}/${componentName}${SNAPSHOT_EXT}`
}
