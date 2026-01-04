const fs = require("fs");

// Load quotes
const quotes = JSON.parse(fs.readFileSync("quotes.json", "utf8"));

// Pick quote of the day (deterministic)
const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
const quote = quotes[dayOfYear % quotes.length];

// Read README
let readme = fs.readFileSync("README.md", "utf8");

// Replace placeholder
readme = readme.replace(/<!--QUOTE_PLACEHOLDER-->[\s\S]*?(?=\n$|$)/, `<!--QUOTE_PLACEHOLDER-->\n${quote}`);

// Write updated README
fs.writeFileSync("README.md", readme);
