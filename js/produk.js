document.addEventListener("DOMContentLoaded", function() {
  const produkGrid = document.getElementById("produkGrid");
  const sliderIntervals = [];

  // Daftar produk yang akan ditampilkan
  const produkList = [
    {
      id: 1,
      nama: "HIJAB SPORT",
      harga: "Rp 35.000",
      gambar: [
        "images/hijabspot-black.jpg",
        "images/hijabspot-darkgrey.jpg",
        "images/hijabspot-taupe.jpg"
      ],
    },
    {
      id: 2,
      nama: "PARIS PREMIUM",
      harga: "Rp 45.000",
      gambar: [
        "images/parispremium-brokenwhite.jpg",
        "images/parispremium-charcoal.jpg",
        "images/parispremium-navy.jpg",
      ],
    },
    {
      id: 3,
      nama: "PASHMINA CRINKLE",
      harga: "Rp 65.000",
      gambar: [
        "images/pashminacrinkle-jeansblue.jpg",
        "images/pashminacrinkle-maroon.jpg",
        "images/pashminacrinkle-milo.jpg",
      ],
    },
    {
      id: 4,
      nama: "PASHMINA KAOS RAYON",
      harga: "Rp 70.000",
      gambar: [
        "images/kaosrayon-grey.jpg",
        "images/kaosrayon-khaki.jpg",
        "images/kaosrayon-milo.jpg",
      ],
    },
    {
      id: 5,
      nama: "PASHMINA SILK",
      harga: "Rp 90.000",
      gambar: [
        "images/pashminapistacio.jpeg",
        "images/pashmina_grey.jpeg",
        "images/pashminachoco.jpeg"
      ],
    },
  ];

  // Fungsi untuk menampilkan kartu produk
  function tampilkanProduk() {
      if (!produkGrid) return;

      produkGrid.innerHTML = produkList.map(produk => {
          const imagesHTML = produk.gambar.map((g, index) => 
              `<img src="${g}" alt="${produk.nama}" class="gambar-produk ${index === 0 ? 'active' : ''}" data-index="${index}">`
          ).join('');

          return `
              <div class="card" data-id="${produk.id}">
                  <div class="image-container">
                      ${imagesHTML}
                      <button class="slider-btn prev-btn" data-direction="-1">‹</button>
                      <button class="slider-btn next-btn" data-direction="1">›</button>
                  </div>
                  <div class="card-body">
                      <h3>${produk.nama}</h3>
                      <p>${produk.harga}</p>
                      <a href="produk-detail.html?id=${produk.id}" class="card-button">Lihat Detail</a>
                  </div>
              </div>
          `;
      }).join('');
      
      setupSliders();
  }

  // Fungsi untuk mengatur semua slider pada kartu produk
  function setupSliders() {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
          const images = card.querySelectorAll('.gambar-produk');
          const totalImages = images.length;
          let currentIndex = 0;

          // Fungsi untuk menampilkan slide berdasarkan index
          function showSlide(index) {
              images.forEach(img => img.classList.remove('active'));
              images[index].classList.add('active');
          }

          // Fungsi untuk slide otomatis
          function startAutoSlide() {
              return setInterval(() => {
                  currentIndex = (currentIndex + 1) % totalImages;
                  showSlide(currentIndex);
              }, 3000); // Ganti gambar setiap 3 detik
          }

          // Memulai slideshow otomatis untuk setiap kartu
          let autoSlide = startAutoSlide();
          sliderIntervals.push(autoSlide);

          // Event listener untuk tombol navigasi manual
          card.querySelectorAll('.slider-btn').forEach(btn => {
              btn.addEventListener('click', (e) => {
                  e.preventDefault(); // Mencegah link di image-container ter-klik
                  e.stopPropagation(); // Mencegah event lain terpicu

                  // Hentikan slideshow otomatis saat tombol diklik
                  clearInterval(autoSlide);

                  const direction = parseInt(btn.dataset.direction);
                  currentIndex = (currentIndex + direction + totalImages) % totalImages;
                  showSlide(currentIndex);
              });
          });

          // Hentikan slide otomatis saat hover, dan jalankan lagi saat tidak hover
          const imageContainer = card.querySelector('.image-container');
          imageContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
          imageContainer.addEventListener('mouseleave', () => autoSlide = startAutoSlide());
      });
  }

  tampilkanProduk();
});