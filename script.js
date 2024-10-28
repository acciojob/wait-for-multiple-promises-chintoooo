//your JS code here. If required.
function createPromise(id) {
      const delay = Math.random() * 2 + 1; // Random delay between 1 and 3 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ id, time: delay.toFixed(3) });
        }, delay * 1000);
      });
    }

    // Create an array of 3 promises
    const promises = [createPromise(1), createPromise(2), createPromise(3)];
    const tableBody = document.getElementById('promiseTable');

    // Store the start time to calculate the total duration
    const startTime = performance.now();

    // Wait for all promises to resolve using Promise.all
    Promise.all(promises).then((results) => {
      const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);

      // Clear the loading row
      tableBody.innerHTML = '';

      // Add a row for each promise with its time taken
      results.forEach((result) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>Promise ${result.id}</td>
          <td>${result.time}</td>
        `;
        tableBody.appendChild(row);
      });

      // Add the final row showing the total time taken
      const totalRow = document.createElement('tr');
      totalRow.innerHTML = `
        <td>Total</td>
        <td>${totalTime}</td>
      `;
      tableBody.appendChild(totalRow);
    });
  </script>
</body>
</html>