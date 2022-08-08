document.addEventListener('click', e => {
    const isDropDownBtn = e.target.matches("[data-dropdown-btn]")
    if (!isDropDownBtn && e.target.closest('[data-dropdown]') != null) return
    let currentDropdown
    if (isDropDownBtn) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})



const sidebar = document.getElementById('sidebar');
function openSidebar() {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active')
    } else {
        sidebar.classList.add('active')
    }
}
function closeSideBar() {
    sidebar.classList.remove('active')
}