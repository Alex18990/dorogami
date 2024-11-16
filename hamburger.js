function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.toggle('active');
    } else {
        console.error("Menu element not found");
    }
}