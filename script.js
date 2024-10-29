   // Helper function to generate a random delay between 1 and 3 seconds
    const getRandomDelay = () => Math.random() * 2000 + 1000;

    // Create three promises with random delays
    const promise1 = new Promise((resolve) => {
      const delay = getRandomDelay();
      setTimeout(() => resolve(delay / 1000), delay);
    });

    const promise2 = new Promise((resolve) => {
      const delay = getRandomDelay();
      setTimeout(() => resolve(delay / 1000), delay);
    });

    const promise3 = new Promise((resolve) => {
      const delay = getRandomDelay();
      setTimeout(() => resolve(delay / 1000), delay);
    });

    // Start time measurement
    const startTime = performance.now();

    // Wait for all promises to resolve
    Promise.all([promise1, promise2, promise3]).then((results) => {
      const totalTime = (performance.now() - startTime) / 1000;

      // Get table body and remove the loading row
      const tbody = document.getElementById("table-body");
      const loadingRow = document.getElementById("loading");
      if (loadingRow) tbody.removeChild(loadingRow);

      // Helper function to add a new row
      const addRow = (name, value) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${name}</td><td>${value.toFixed(3)}</td>`;
        tbody.appendChild(row);
      };

      // Add rows with promise results and total time
      addRow("Promise 1", results[0]);
      addRow("Promise 2", results[1]);
      addRow("Promise 3", results[2]);
      addRow("Total", totalTime);
    });
  </script>
</body>
</html>