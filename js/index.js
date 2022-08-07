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



function openSidebar() {

}