import {describe, it, expect} from "vitest";
import { Cell, CellStatus } from '../core/cell';

describe('In the game of life', () => {
	it('any live cell with fewer than two live neighbours dies, as if by underpopulation', () => {
		expect(Cell.create(CellStatus.Alive).regenerate(1).isAlive()).toBeFalsy();
		expect(Cell.create(CellStatus.Dead).regenerate(1).isAlive()).toBeFalsy();
	});
	it('any live cell with two or three live neighbours lives on to the next generation.', () => {
		expect(Cell.create(CellStatus.Alive).regenerate(2).isAlive()).toBeTruthy();
		expect(Cell.create(CellStatus.Alive).regenerate(3).isAlive()).toBeTruthy();
		expect(Cell.create(CellStatus.Dead).regenerate(2).isAlive()).toBeFalsy();
	});
	it('any live cell with more than three live neighbours dies, as if by overpopulation', () => {
		expect(Cell.create(CellStatus.Alive).regenerate(4).isAlive()).toBeFalsy();
		expect(Cell.create(CellStatus.Dead).regenerate(4).isAlive()).toBeFalsy();
	});
	it('any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', () => {
		expect(Cell.create(CellStatus.Dead).regenerate(3).isAlive()).toBeTruthy();
	});
	it('cells with undefined initial state are not allowed', () => {
		expect(() => Cell.create(undefined).regenerate(2)).toThrow();
		expect(() => Cell.create(null).regenerate(2)).toThrow();
	});
});
