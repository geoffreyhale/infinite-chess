import React from 'react';
import Cell from './cell';

export default class World extends React.Component {
    renderTableCells(y) {
        const tableRowCells = [];

        const minX = this.props.gameWorld.cells.reduce((min, cell) => {
            return Math.min(min, cell.x);
        }, Number.MAX_SAFE_INTEGER);

        const maxX = this.props.gameWorld.cells.reduce((max, cell) => {
            return Math.max(max, cell.x);
        }, Number.MIN_SAFE_INTEGER);

        for (let x = minX; x < maxX + 1; x++) {
            tableRowCells.push(
                <td key={x}><Cell gameCell={this.props.gameWorld.getCell(x,y)} /></td>
            );
        }

        return tableRowCells;
    }

    renderTableRows() {
        const tableRows = [];

        const minY = this.props.gameWorld.cells.reduce((min, cell) => {
            return Math.min(min, cell.y);
        }, Number.MAX_SAFE_INTEGER);

        const maxY = this.props.gameWorld.cells.reduce((max, cell) => {
            return Math.max(max, cell.y);
        }, Number.MIN_SAFE_INTEGER);

        for (let y = maxY; y > minY - 1; y--) {
            tableRows.push(
                <tr key={y}>{this.renderTableCells(y)}</tr>
            );
        }

        return tableRows;
    }

    renderLikeTable() {
        return (
            <table>
                <tbody>
                {this.renderTableRows()}
                </tbody>
            </table>
        );
    }

    render() {
        return this.renderLikeTable();
    }
}