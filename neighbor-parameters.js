const mainGrid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

export const neighbors = () => {
  for (let axisX = 0; axisX < mainGrid.length; axisX++) {
    for (let axisY = 0; axisY < mainGrid[axisX].length; axisY++) {
      const cordinates = [axisX, axisY];
      console.log(cordinates);
      const myneighbors = [
        [axisX - 1, axisY - 1],
        [axisX - 1, axisY],
        [axisX - 1, +1],
        [axisX, axisY + 1],
        [axisX + 1, axisY + 1],
        [axisX + 1, axisY],
        [axisX + 1, axisY - 1],
        [axisX, axisY - 1],
      ];
      console.log(myneighbors);
    }
  }
};
neighbors();
