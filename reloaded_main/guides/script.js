// Get the sidebar, menu button, and close button
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

// Toggle sidebar open/close
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});
