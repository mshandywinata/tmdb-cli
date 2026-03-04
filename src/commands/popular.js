import getData from "../services/tmdbApi.js";
import formatter from "../utils/formatter.js";

const getPopular = async (page) => {
    const data = await getData("popular", page);
    const formatted = formatter(data, "popular");

    return formatted;
}

export default getPopular;