function createPromise(index) {
    const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    return new Promise(resolve => {
      setTimeout(() => resolve({ index, time: time.toFixed(3) }), time * 1000);
    });
  }

  // Create an array of 3 promises
  const promises = [createPromise(1), createPromise(2), createPromise(3)];
  const startTime = performance.now(); // Record start time

  // Wait for all promises to resolve
  Promise.all(promises).then(results => {
    const endTime = performance.now(); // Record end time
    const totalTime = ((endTime - startTime) / 1000).toFixed(3); // Calculate total time

    const tbody = document.querySelector('#promiseTable tbody');
    tbody.innerHTML = ''; // Remove the loading row

    // Populate the table with promise results
    results.forEach(result => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>Promise ${result.index}</td><td>${result.time}</td>`;
      tbody.appendChild(row);
    });

    // Add the total time row
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    tbody.appendChild(totalRow);
  });
</script>

</body>
</html>