# TMDB CLI

A command-line tool to browse movies from The Movie Database (TMDB) API.

## Installation

```bash
npm install
npm link
```

## Usage

```bash
tmdb-cli --type <command> [--page <number>]
```

### Commands

- `playing` — Show now playing movies
- `popular` — Show popular movies
- `top` — Show top rated movies
- `upcoming` — Show upcoming movies

### Examples

```bash
# Show popular movies (page 1)
tmdb-cli --type popular

# Show top rated movies on page 2
tmdb-cli --type top --page 2

# Show now playing movies
tmdb-cli --type playing
```

## Setup

1. Create a `.env` file in the project root:
   ```
   TMDB_API_TOKEN=your_api_token_here
   ```

2. Get your API token from [themoviedb.org](https://www.themoviedb.org/) → Settings → API

## Features

- Browse movies by category
- Pagination support
- Display title, release year, rating, and overview
- Error handling for network failures and invalid inputs

## License

MIT
