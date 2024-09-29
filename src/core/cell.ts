export enum CellStatus {
	Dead,
	Alive,
}

export class Cell {
	private constructor(private readonly status: CellStatus) {}

	static create(status: CellStatus) {
		if (status == null) {
			throw new Error('Invalid status');
		}
		return new Cell(status);
	}

	regenerate(numberNeighbors: number) {
		return Cell.create(
			this.isAlive() ? this.statusForAliveCell(numberNeighbors) : this.statusForDeadCell(numberNeighbors)
		);
	}

	private statusForAliveCell(numberNeighbors: number) {
		const isStablePopulation = numberNeighbors === 2 || numberNeighbors === 3;
		return isStablePopulation ? CellStatus.Alive : CellStatus.Dead;
	}

	private statusForDeadCell(numberNeighbors: number) {
		const isFertilePopulation = numberNeighbors === 3;
		return isFertilePopulation ? CellStatus.Alive : CellStatus.Dead;
	}

	isAlive() {
		return this.status === CellStatus.Alive;
	}
}
