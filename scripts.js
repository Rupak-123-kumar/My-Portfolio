document.getElementById("openPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// Close the popup if user clicks outside of it
window.onclick = function(event) {
    let popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
