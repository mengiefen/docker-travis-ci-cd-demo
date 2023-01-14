function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const favoriteColor = process.env.FAVORITE_COLOR;

async function main() {
  while (true) {
    console.log('Microservices rock!');
    console.log(`My favorite color is ${favoriteColor}`);
    await sleep(5000);
  }
}

main();
