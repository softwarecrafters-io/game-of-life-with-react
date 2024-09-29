# Game of Life

This project is an implementation of John Conway's famous "Game of Life" using React and TypeScript. The Game of Life is a cellular automaton that simulates the evolution of a population of cells according to simple rules.

## Features
- 30x30 cell board
- Button to advance to the next generation

## Prerequisites
- Node.js (version 18 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone this repository:
   ```
   git clone [REPOSITORY_URL]
   ```

2. Navigate to the project directory:
   ```
   cd game-of-life
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the application in development mode:

```
npm run dev
```

This will start the development server. Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

## Running the Tests

To run the tests:

```
npm test
```

## How to Play

1. When the page loads, you'll see a 30x30 cell board with an initial random pattern.
2. Press the "Next Generation" button to advance to the next generation of the game.
3. Observe how the pattern of cells evolves according to the rules of the Game of Life.

## Rules of the Game of Life

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## Contributing

Contributions are welcome. Please open an issue to discuss proposed changes before making a pull request.
