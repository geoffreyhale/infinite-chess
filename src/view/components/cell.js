import React from 'react';

const CELL_SIZE = 64;

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    getColor() {
        return (this.props.gameCell.x + this.props.gameCell.y) % 2 === 1 ? 'white' : 'lightgrey';
    }

    render() {
        if (this.props.gameCell == null) {
            return null;
        }

        const el = React.createElement('div', {
            key: this.props.gameCell.x + '-' + this.props.gameCell.y,
            style: {
                background: this.getColor(),
                display: 'inline-block',
                height: CELL_SIZE,
                width: CELL_SIZE,
            },
        },
            this.props.gameCell.x + '-' + this.props.gameCell.y
        );
        return el;
    }
}