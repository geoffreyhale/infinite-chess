import World from './components/world';

export default class Game {
    constructor() {
        this.world = new World();
        this.world.buildSquare(8);
    }
}