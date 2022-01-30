import { neighbors } from './neighbor-parameters.js';

const filtered = coordinates.filter(function (item) {
  item[axisX] >= 0 &&
    item[axisX] < mainGrid.length &&
    item[axisY] >= 0 &&
    item[axisY] < mainGrid.length;
});

console.log(filtered);
