const output = document.getElementById("output");
const loadingRow = document.getElementById("loading");

function createPromise(index) {
  const delay = Math.random() * 2000 + 1000; // 1000 to 3000 ms
  const start = performance.now();

  return new Promise(resolve => {
    setTimeout(() => {
      const end = performance.now();
      const timeTaken = ((end - start) / 1000).toFixed(3);
      resolve({ name: `Promise ${index}`, time: timeTaken });
    }, delay);
  });
}

async function runPromises() {
  const startAll = performance.now();

  const promises = [
    createPromise(1),
    createPromise(2),
    createPromise(3)
  ];

  const results = await Promise.all(promises);
  const endAll = performance.now();
  const totalTime = ((endAll - startAll) / 1000).toFixed(3);

  // Remove loading row
  loadingRow.remove();

  // Add result rows
  results.forEach(result => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
    output.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
}

runPromises();
