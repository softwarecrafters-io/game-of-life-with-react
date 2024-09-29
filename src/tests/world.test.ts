import {describe, it, expect} from "vitest";
import { Cell, CellStatus } from '../core/cell';
import { World } from '../core/world';

const { Dead, Alive } = CellStatus;

describe('The world', () => {
	it('creates a cell matrix for a given cell status', () => {
		const initialStatus = [
			[Dead, Dead],
			[Dead, Alive],
			[Dead, Dead],
		];

		const world = World.createFrom(initialStatus).getCellMatrix();

		expect(world).toEqual([
			[Cell.create(Dead), Cell.create(Dead)],
			[Cell.create(Dead), Cell.create(Alive)],
			[Cell.create(Dead), Cell.create(Dead)],
		]);
	});

	it('gets alive neighbors for a given coordinates', () => {
		expect(World.createFrom([[Dead]]).aliveNeighbors(0, 0)).toBe(0);
		expect(World.createFrom([[Alive, Dead]]).aliveNeighbors(0, 1)).toBe(1);
		expect(World.createFrom([[Dead, Dead]]).aliveNeighbors(0, 1)).toBe(0);
		expect(World.createFrom([[Alive, Dead, Alive]]).aliveNeighbors(0, 1)).toBe(2);
		expect(World.createFrom([[Dead, Dead, Dead]]).aliveNeighbors(0, 1)).toBe(0);
		expect(World.createFrom([[Dead], [Alive]]).aliveNeighbors(0, 0)).toBe(1);
		expect(World.createFrom([[Dead], [Dead]]).aliveNeighbors(0, 0)).toBe(0);
		expect(
			World.createFrom([
				[Alive, Dead, Alive],
				[Alive, Alive, Alive],
			]).aliveNeighbors(0, 1)
		).toBe(5);
		expect(
			World.createFrom([
				[Dead, Alive, Dead],
				[Dead, Dead, Dead],
			]).aliveNeighbors(0, 1)
		).toBe(0);
		expect(
			World.createFrom([
				[Alive, Alive, Alive],
				[Alive, Dead, Alive],
				[Alive, Alive, Alive],
			]).aliveNeighbors(1, 1)
		).toBe(8);
	});

	it('yields the next state of the game', () => {
		const world = World.createFrom([
			[Dead, Alive, Dead],
			[Dead, Alive, Dead],
			[Dead, Alive, Dead],
		]);

		const result = world.nextGeneration().getCellMatrix();

		expect(result).toEqual([
			[Cell.create(Dead), Cell.create(Dead), Cell.create(Dead)],
			[Cell.create(Alive), Cell.create(Alive), Cell.create(Alive)],
			[Cell.create(Dead), Cell.create(Dead), Cell.create(Dead)],
		]);
	});

	it('never changes for a given initial block pattern', () => {
		const world = World.createFrom([
			[Alive, Alive, Dead, Dead, Dead],
			[Alive, Alive, Dead, Dead, Dead],
			[Dead, Dead, Dead, Dead, Dead],
			[Dead, Dead, Dead, Dead, Dead],
			[Dead, Dead, Dead, Dead, Dead],
		]);

		const result = world.nextGeneration().nextGeneration().nextGeneration();

		expect(result).toEqual(world);
	});

	it('returns to the same state after two generations for a given oscillator pattern', () => {
		const world = World.createFrom([
			[Dead, Dead, Dead, Dead, Dead],
			[Dead, Dead, Alive, Dead, Dead],
			[Dead, Dead, Alive, Dead, Dead],
			[Dead, Dead, Alive, Dead, Dead],
			[Dead, Dead, Dead, Dead, Dead],
		]);

		const result = world.nextGeneration().nextGeneration();

		expect(result).toEqual(world);
	});
});
