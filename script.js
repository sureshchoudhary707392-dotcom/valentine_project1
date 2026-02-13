function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('active');
}

function moveNoButton() {
    const btn = document.getElementById('noBtn');
    // Random position within the screen
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - 50);
    
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function success() {
    document.getElementById('askContainer').classList.add('hidden');
    document.getElementById('successContainer').classList.remove('hidden');
    // Hide menu if open
    document.getElementById('sideMenu').classList.remove('active');
}

// Close menu if user clicks outside
window.onclick = function(event) {
    const menu = document.getElementById('sideMenu');
    if (!event.target.closest('.side-menu') && !event.target.closest('.menu-btn')) {
        menu.classList.remove('active');
    }
}
