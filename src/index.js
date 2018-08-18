import React from 'react';
import ReactDOM from 'react-dom';

import Game from './game/game';
import View from './view/view';

const game = new Game();
const view = new View(game);

const Index = () => {
    return <div>{view.render()}</div>;
};

ReactDOM.render(<Index />, document.getElementById('index'));