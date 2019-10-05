export const getFileExtension = (filename) => {
  const ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? "" : ext[1];
};
