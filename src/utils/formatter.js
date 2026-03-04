const formatter = ({ results, page, total_pages }, category) => {
    let header = `\n${category.toUpperCase()} MOVIES\n`;
    header += "-".repeat(50) + "\n\n";

    const movies = results.map((movie, index) => {
        let releaseYear;

        if (!movie.release_date) {
            releaseYear = "N/A";
        } else {
            // date format is YYYY-MM-DD
            releaseYear = movie.release_date.slice(0, 4);
        }

        const overview = movie.overview.length > 26 
            ? movie.overview.substring(0, 26) + "..." 
            : movie.overview;

        const rating = movie.vote_average.toFixed(2);

        return `${index + 1}. ${movie.title} (${releaseYear}) - Rating: ${rating}\n    Overview: ${overview}\n\n`;
    })

    return header + movies.join("\n") + `\nPage ${page} of ${total_pages}`;
}

export default formatter;