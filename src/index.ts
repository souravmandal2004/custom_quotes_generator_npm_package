import quotes from "./quotes.js";

export const getRandomQuote = () => {
    const length = quotes.length;
    // generate a random number
    const randomNumber = Math.floor (Math.random() * length);

    const getQuote = quotes[randomNumber];

    return getQuote;
}