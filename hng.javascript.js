// Function to update the current time in UTC
function updateCurrentTime() {
    const currentTime = new Date().toISOString(); // Get current time in UTC
    document.getElementById('currentTimeUTC').textContent = `Current time (UTC): ${currentTime}`;
  }
  
  // Update time on page load
  window.onload = updateCurrentTime;
  
  // Update time every minute to keep it dynamic
  setInterval(updateCurrentTime, 60000);
  