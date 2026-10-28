# Pokédex CLI

A simple command-line Pokédex built with **TypeScript** and **Node.js** as part of the [Boot.dev](https://www.boot.dev/) curriculum. It uses [PokéAPI](https://pokeapi.co/) to explore locations, discover Pokémon, and build a personal Pokédex.

## Features

- Explore Pokémon location areas with pagination.
- Find Pokémon that appear in a location area.
- Attempt to catch Pokémon and add them to your Pokédex.
- Inspect the stats and types of captured Pokémon.
- Cache API responses in memory to reduce repeated requests.

## Getting started

```bash
npm install
npm run build
npm run dev
```

## Commands

| Command | Description |
| --- | --- |
| `help` | Show available commands. |
| `map` | Show the next 20 location areas. |
| `mapb` | Go back 20 location areas. |
| `explore <area>` | List Pokémon found in a location area. |
| `catch <pokemon>` | Attempt to catch a Pokémon. |
| `inspect <pokemon>` | Show details of a caught Pokémon. |
| `pokedex` | List captured Pokémon. |
| `exit` | Close the application. |

## Example

```text
Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - magikarp
 ...

Pokedex > catch pidgey
Throwing a Pokeball at pidgey...
pidgey was caught!

Pokedex > pokedex
Your Pokedex:
 - pidgey
```

Catching a Pokémon is random, so your results may vary. Captured Pokémon and cached data are kept **in memory** and are lost when the application exits.

## Tests

Run the tests with Vitest:

```bash
npm run build
npm run test
```

## Technologies

TypeScript · Node.js · Vitest · PokéAPI