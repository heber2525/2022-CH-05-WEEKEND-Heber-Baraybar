export const mainGrid = (row) => {
  let grid = new Array(row);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(row);
  }
  for (let j = 0; j < grid.length; j++) {
    grid[j].fill(false);
  }
};
mainGrid();
