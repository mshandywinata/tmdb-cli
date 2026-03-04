import getData from "../services/tmdbApi.js";
import formatter from "../utils/formatter.js";

const getPlaying = async (page) => {
    const data = await getData("now_playing", page);
    const formatted = formatter(data, "now playing");

    return formatted;
}

export default getPlaying;