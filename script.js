// Tambahin DOM
let buttonGoToLib = document.getElementById("libraryButton");
buttonGoToLib.addEventListener("click", gotolib);

function gotolib() {
  Swal.fire({
    title: "Kunjungi Halaman Perpustakaan USU?",
    text: "Anda akan diarahkan ke halaman web perpustakaan.",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Ya, Lanjutkan!",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Mengalihkan...",
        text: "Mohon tunggu sebentar.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500, // Tutup otomatis setelah 1.5 detik
      }).then(() => {
        window.open("https://library.usu.ac.id/", "_blank");
      });
    }
  });
}


