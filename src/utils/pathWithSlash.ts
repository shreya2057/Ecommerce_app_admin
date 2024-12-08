import { generatePath } from 'react-router-dom';

export const pathWithSlash = (
  path: string,
  pathParams: Record<string, string>,
) => {
  return generatePath(path, pathParams) + '/';
};
