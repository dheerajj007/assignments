let count = 0;

function updateCounter() {
  count++;
  console.log(count);
}

// Update the counter every 1000 milliseconds (1 second)
setInterval(updateCounter, 1000);
