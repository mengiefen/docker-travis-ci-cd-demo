function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const FAVORITE_COLOR = process.env.FAVORITE_COLOR;

async function main() {
  while (true) {
    console.log('Microservices rock!');
    console.log(`My favorite color is ${FAVORITE_COLOR}`);
    await sleep(5000);
  }
}

main();
