import Cell from './cell';

/**
 * World is arbitrary set of cells
 */
export default class World {
    constructor() {
        this.cells = [];
    }

    addCell(cell) {
        this.cells.push(cell);
    }

    getCell(x,y) {
        return this.cells.find((cell) => {
            return x == cell.x && y == cell.y;
        })
    }

    buildSquare(size) {
        for (let x = 1; x <= size; x++) {
            for (let y = 1; y <= size; y++) {
                this.addCell(new Cell(x,y));
            }
        }
    }
}