export const count = (arr, item) => {
  return arr.filter((x) => x === item).length;
};

export const getUniqueLabel = (arr) => {
  const uniqueElements = new Set(arr);
  return uniqueElements;
};

export const getLabelCount = (bigData, dataSet, label) => {
  return dataSet.map((item) => count(getLabels(bigData, label), item));
};

export const getLabels = (list, label) => {
  return list.map((item) => item[label]);
};

export const generateBackgroundColor = () => {
  return `rgba(${Math.floor(Math.random() * 200)}, ${Math.floor(
    Math.random() * 200
  )}, ${Math.floor(Math.random() * 200)}, 0.5)`;
};
