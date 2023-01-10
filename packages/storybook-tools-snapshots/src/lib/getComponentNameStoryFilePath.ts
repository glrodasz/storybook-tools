export const getComponentNameStoryFilePath = (filePath: string) : string | undefined => {
  return filePath.split('/').pop()?.split('.')?.shift();
};
