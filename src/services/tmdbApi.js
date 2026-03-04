import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const baseUrl = "https://api.themoviedb.org/3/movie/";

const getData = async (path, page = 1) => {
    const validPath = ["now_playing", "popular", "top_rated", "upcoming"];

    if (!process.env.TMDB_API_TOKEN) {
        throw new Error("TMDB_API_TOKEN not found in .env file");
    } else if (!validPath.includes(path)) {
        throw new Error("path is invalid");
    } else if (isNaN(page)) {
        throw new Error("page must be a number");
    } else if (page < 1) {
        throw new Error("page must be positive integer more than 1");
    }

    const options = {
        method: 'GET',
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + process.env.TMDB_API_TOKEN,
        }
    }

    try {
        const res = await fetch(baseUrl + path + `?page=${page}`, options);
        
        if (!res.ok) {
            throw new Error(`API request failed with status: ${res.status}`);
        }
    
        const data = await res.json();

        if (page > data.total_pages) {
            throw new Error(`Page ${page} exceeds total pages (${data.total_pages})`);
        }

        return data;
    } catch (error) {
        // no internet, timeout, etc.
        if (error instanceof TypeError) {
            throw new Error("Network error: Cannot connect to TMDB API. Check your internet connection");
        }
        throw error;
    }

}

export default getData;