export const transformActiveCellInObj = (str: string) => {
  const [rowId, cellId] = str.split(":");
  return {
    rowId,
    cellId,
  };
};
