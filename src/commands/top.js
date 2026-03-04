import getData from "../services/tmdbApi.js";
import formatter from "../utils/formatter.js";

const getTop = async (page) => {
    const data = await getData("top_rated", page);
    const formatted = formatter(data, "top rated");

    return formatted;
}

export default getTop;