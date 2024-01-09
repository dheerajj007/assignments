function updateCounter() {
  const currentTime = new Date().toLocaleTimeString();
  console.log(currentTime);
}

// Update the counter every 1000 milliseconds (1 second)
setInterval(updateCounter, 1000);
