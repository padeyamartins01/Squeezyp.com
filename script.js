// Year stamp
document.getElementById("year").textContent = new Date().getFullYear();

// OPTIONAL: prevent placeholder links from navigating until you paste real links
document.querySelectorAll('a[href^="YOUR_"]').forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Paste your real link into index.html (replace the YOUR_* placeholder).");
  });
});
