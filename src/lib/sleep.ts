/** Wait for a given amount of time in milliseconds. */
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default sleep;
