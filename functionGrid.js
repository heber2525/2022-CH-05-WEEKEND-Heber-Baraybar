const grilla = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

const cell = () => {
  for (let horizontal = 0; horizontal < grilla.length; horizontal++) {
    for (let vertical = 0; vertical < grilla[horizontal].length; vertical++) {
      let celula = grilla[horizontal][vertical];
      let vecinas = [-1, -1, -1, -1, -1, -1, -1, -1];
      if (horizontal > 0 && vertical > 0) {
        vecinas[0] = grilla[horizontal - 1][vertical - 1]; // arriba izquierda
        vecinas[1] = grilla[horizontal][vertical - 1]; // izquierda
        vecinas[3] = grilla[horizontal - 1][vertical]; // arriba
      }
      if (horizontal < grilla.length - 1) {
        vecinas[4] = grilla[horizontal + 1][vertical]; // abajo
        if (vertical > 0) {
          vecinas[2] = grilla[horizontal + 1][vertical - 1]; // abajo izquierda
        }
        if (vertical < grilla[0].length - 1) {
          vecinas[6] = grilla[horizontal][vertical + 1]; // derecha
          if (horizontal > 0) {
            vecinas[5] = grilla[horizontal - 1][vertical + 1]; // arriba derecha
          }
          if (horizontal < grilla.length - 1) {
            vecinas[7] = grilla[horizontal + 1][vertical + 1]; // abajo derecha
          }
        }
      }
    }
  }
};
celulas();
