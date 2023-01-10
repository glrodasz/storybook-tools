import * as path from 'node:path';

export const getStoryPaths = (
  filePath: string
): { resolvedFilePath: string; dirnamePath: string } => {
  const resolvedFilePath = path.resolve(__dirname, filePath);
  const dirnamePath = path.dirname(resolvedFilePath);
  return { resolvedFilePath, dirnamePath };
};
