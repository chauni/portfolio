const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownList = document.getElementById("dropdownList");

dropdownBtn.addEventListener("click", () => {
    toggleDropdown()
})

function toggleDropdown() {
    if (dropdownList.style.display != "block") {
        dropdownList.style.display = "block"
    } else {
        dropdownList.style.display = "none"
    }
}
