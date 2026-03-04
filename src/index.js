#!/usr/bin/env node
import getPlaying from "./commands/playing.js";
import getPopular from "./commands/popular.js";
import getTop from "./commands/top.js";
import getUpcoming from "./commands/upcoming.js";

const args = process.argv.slice(2);

const main = async () => {
    const typeIndex = args.indexOf("--type");
    const pageIndex = args.indexOf("--page");
    const command = args[typeIndex + 1];
    const page = pageIndex !== -1 ? parseInt(args[pageIndex + 1]) : 1;

    if (typeIndex === -1 || !command) {
        console.log('Usage: tmdb-cli --type <command> --page <number>\n');
        console.log('Commands:');
        console.log('  "playing"      Show now playing movies');
        console.log('  "popular"      Show popular movies');
        console.log('  "top"          Show top rated movies');
        console.log('  "upcoming"     Show upcoming movies');
        return;
    }

    switch (command) {
        case "playing":
            try {
                const playing = await getPlaying(page || 1);
                console.log(playing);
            } catch (error) {
                console.log(error.message);
            }

            break;
        case "popular":
            try {
                const popular = await getPopular(page || 1);
                console.log(popular);
            } catch (error) {
                console.log(error.message);
            }

            break;
        case "top":
            try {
                const top = await getTop(page || 1);
                console.log(top);
            } catch (error) {
                console.log(error.message);
            }

            break;
        case "upcoming":
            try {
                const upcoming = await getUpcoming(page || 1);
                console.log(upcoming);
            } catch (error) {
                console.log(error.message);
            }

            break;
        default:
            console.log(`Unknown command: ${command}`);
    }
}

main();
