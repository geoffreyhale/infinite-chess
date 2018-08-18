/**
 * Cell
 *
 * An infinite world has cells at every pair of x,y coordinates
 * Front-end game logic need not know about them all
 * Front-end game logic may need to know a bit more than view logic
 */
export default class Cell {
    constructor(x, y) {
        this.walkable = true;
        this.x = x;
        this.y = y;
    }
}