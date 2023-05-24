import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
require('dotenv').config();


const botToken: string = process.env.BOT_TOKEN;


(async () => {
    const BOT = new Client({intents: IntentOptions});
    BOT.on("ready", () => console.log("Connected to Discord!"));
    await BOT.login(botToken);
})();