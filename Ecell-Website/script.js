
function showSidebar(event) {
    event.preventDefault(); // Prevent page refresh
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(event) {
    event.preventDefault(); // Prevent page refresh
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}