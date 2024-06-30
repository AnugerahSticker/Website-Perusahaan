// Buka modal dan tampilkan gambar yang diklik
function openFullscreen(img) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-image');
    var captionText = document.getElementById('caption');
    
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Tutup modal saat tombol close diklik
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Tutup modal saat area di luar gambar diklik
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
