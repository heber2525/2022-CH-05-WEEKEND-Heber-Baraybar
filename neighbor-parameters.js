import { mainGrid } from './adding-neighbors';

export const neighbors = (arr) => {
  for (let axisX = 0; axisX < arr.length; axisX++) {
    for (let axisY = 0; axisY < arr[axisX].length; axisY++) {
      // const coordinates = [axisX, axisY];

      const myNeighbors = [
        [axisX - 1, axisY - 1],
        [axisX - 1, axisY],
        [axisX - 1, +1],
        [axisX, axisY + 1],
        [axisX + 1, axisY + 1],
        [axisX + 1, axisY],
        [axisX + 1, axisY - 1],
        [axisX, axisY - 1],
      ];
    }
  }
};
neighbors();
