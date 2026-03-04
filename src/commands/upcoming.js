import getData from "../services/tmdbApi.js";
import formatter from "../utils/formatter.js";

const getUpcoming = async (page) => {
    const data = await getData("upcoming", page);
    const formatted = formatter(data, "upcoming");

    return formatted;
}

export default getUpcoming;