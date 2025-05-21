  const output = document.getElementById('output');
const loadingRow = document.getElementById('loading-row');

function createTimedPromise(index) {
  const delay = Math.random() * 2000 + 1000; // between 1000ms and 3000ms
  const start = performance.now();

  return new Promise(resolve => {
    setTimeout(() => {
      const end = performance.now();
      const seconds = ((end - start) / 1000).toFixed(3);
      resolve({ name: `Promise ${index}`, time: seconds });
    }, delay);
  });
}

async function runPromises() {
  const startAll = performance.now();

  const promises = [
    createTimedPromise(1),
    createTimedPromise(2),
    createTimedPromise(3)
  ];

  const results = await Promise.all(promises);
  const endAll = performance.now();
  const total = ((endAll - startAll) / 1000).toFixed(3);

  // Remove "Loading..." row
  loadingRow.remove();

  // Populate the rows
  results.forEach(({ name, time }) => {
    const row = document.createElement
