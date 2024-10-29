
  <script>
    // Helper function to generate a random delay between 1 and 3 seconds
    const getRandomDelay = () => Math.random() * 2000 + 1000;

    // Create three promises with random delays
    const promise1 = new Promise((resolve) => {
      const delay = getRandomDelay();
      setTimeout(() => resolve(delay / 1000), delay);  // Resolve with time in seconds
    });

    const promise2 = new Promise((resolve) => {
      const delay = getRandomDelay();
      setTimeout(() => resolve(delay / 1000), delay);
    });

    const promise3 = new Promise((resolve) => {
      const delay = getRandomDelay();
      setTimeout(() => resolve(delay / 1000), delay);
    });

    // Wait for all promises to resolve
    const startTime = performance.now();
    Promise.all([promise1, promise2, promise3]).then((results) => {
      const totalTime = (performance.now() - startTime) / 1000;

      // Get table body and remove loading row
      const tbody = document.querySelector("#promise-table tbody");
      tbody.innerHTML = "";  // Clear loading text

      // Helper function to add rows to the table
      const addRow = (name, value) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${name}</td><td>${value.toFixed(3)}</td>`;
        tbody.appendChild(row);
      };

      // Add rows with promise results
      addRow("Promise 1", results[0]);
      addRow("Promise 2", results[1]);
      addRow("Promise 3", results[2]);
      addRow("Total", totalTime);
    });
  </script>
</body>
</html>