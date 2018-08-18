import React from 'react';
import World from './components/world';

export default class View {
    constructor(game) {
        this.game = game;
    }

    render() {
        return <World gameWorld={this.game.world} />;
    }
}