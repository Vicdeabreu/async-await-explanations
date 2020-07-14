const { taskOne, taskTwo } = require('./tasks');


async function main() {
  console.time('Measuring time');
  const results = await Promise.all([taskOne(), taskTwo()]);

  console.timeEnd('Measuring time');

  console.log('Task one returned', results[0]);
  console.log('Task one returned', results[1]);
}

main();