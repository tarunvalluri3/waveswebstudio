import { loadWebsite } from "../loaders/playwrightLoader.js";

const documents = await loadWebsite("https://www.waveswebstudio.in/contact");


console.log(documents);