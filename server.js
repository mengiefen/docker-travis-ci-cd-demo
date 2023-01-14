function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log('Microservices rock!');
    await sleep(5000);
  }
}

const favoriteColor = process.env.FAVORITE_COLOR;
console.log(`My favorite color is ${favoriteColor}`);

main();
