import 'virtual:windi.css';
import './sudoku.css';

import { init, CellState } from './cells';

const cells: CellState[][] = [
  [0, 0, 3, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [4, 0, 2, 0, 0, 0, 0, 0, 1],
  [0, 9, 0, 0, 8, 0, 6, 0, 7],
  [1, 7, 0, 0, 0, 3, 8, 0, 2],
  [0, 0, 0, 4, 0, 9, 0, 5, 0],
  [5, 0, 8, 0, 0, 0, 3, 0, 0],
  [0, 2, 0, 6, 3, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 9, 1, 0],
];

const gameState = {
  cells,
};

init(gameState.cells);
