export const jobDescriptionSpliter = (description: string) => {
  const resultArray = description.split("\n");
  const result = {
    description: resultArray[1],
    responsopilities: resultArray[4],
    compensation: resultArray[7],
  };
  return result
};
