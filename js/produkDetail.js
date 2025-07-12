document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const nomorWA = "6289531227522";

  // Daftar produk yang akan ditampilkan detailnya
  const produkList = [
    {
      // Produk 1
      id: 1,
      nama: "HIJAB SPORT",
      deskripsi: "Hijab sport adalah jenis hijab yang dirancang khusus untuk menunjang aktivitas olahraga dan kegiatan fisik lainnya dan dibuat dari bahan yang ringan,elastis dan menyerap keringat.",
      // Pesan WA spesifik untuk produk ini
      pesanWA: "Halo Nayra Scarf, saya tertarik dengan produk HIJAB SPORT.",
      gambar: [
        "images/hijabspot-black.jpg",
        "images/hijabspot-putih.jpg",
        "images/hijabspot-grey.jpg",
        "images/hijabspot-darkgrey.jpg",
        "images/hijabspot-khaki.jpg",
        "images/hijabspot-taupe.jpg"
      ],
      varian: [
        { nama: "HIJAB SPORT BLACK", harga: "Rp. 35.000" },
        { nama: "HIJAB SPORT PUTIH", harga: "Rp. 35.000" },
        { nama: "HIJAB SPORT GREY", harga: "Rp. 35.000" },
        { nama: "HIJAB SPORT DARK GREY", harga: "Rp. 35.000" },
        { nama: "HIJAB SPORT KHAKI", harga: "Rp. 35.000" },
        { nama: "HIJAB SPORT TAUPE", harga: "Rp. 35.000" },
      ]
    },
    // Produk 2
    {
      id: 2,
      nama: "PARIS PREMIUM",
      deskripsi: "Paris Premium adalah Hijab berbahan voal paris premium,ringan,adem dan mudah dibentuk.",
      // Pesan WA spesifik untuk produk ini
      pesanWA: "Halo Nayra Scarf, saya tertarik dengan produk PARIS PREMIUM.",
      gambar: [
        "images/parispremium-brokenwhite.jpg",
        "images/parispremium-charcoal.jpg",
        "images/parispremium-coklatmahogany.jpg",
        "images/parispremium-hitam.jpg",
        "images/parispremium-navy.jpg",
        "images/parispremium-wine.jpg",
      ],
      varian: [
        { nama: "PARIS PREMIUM BROKEN WHITE", harga: "Rp. 45.000" },
        { nama: "PARIS PREMIUM CHARCOAL", harga: "Rp. 45.000" },
        { nama: "PARIS PREMIUM COKLAT MAHOGANY", harga: "Rp. 45.000" },
        { nama: "PARIS PREMIUM HITAM", harga: "Rp. 45.000" },
        { nama: "PARIS PREMIUM NAVY", harga: "Rp. 45.000" },
        { nama: "PARIS PREMIUM WINE", harga: "Rp. 45.000" },
      ]
    },
    // Produk 3
    {
      id: 3,
      nama: "PASHMINA CRINKLE",
      deskripsi: "Pashmina crinkle adalah hijab stylish berbahan ringan dan bertekstur unik yang tidak perlu disetrika.",
      // Pesan WA spesifik untuk produk ini
      pesanWA: "Halo Nayra Scarf, saya tertarik dengan produk PASHMINA CRINKLE",
      gambar: [
        "images/pashminacrinkle-emerald.jpg",
        "images/pashminacrinkle-grey.jpg",
        "images/pashminacrinkle-jeansblue.jpg",
        "images/pashminacrinkle-maroon.jpg",
        "images/pashminacrinkle-milo.jpg",
        "images/pashminacrinkle-navy.jpg",
      ],
      varian: [
        { nama: "PASHMINA CRINKLE EMERALD GREEN", harga: "Rp. 65.000" },
        { nama: "PASHMINA CRINKLE GREY", harga: "Rp. 65.000" },
        { nama: "PASHMINA CRINKLE JEANS BLUE", harga: "Rp. 65.000" },
        { nama: "PASHMINA CRINKLE MAROON", harga: "Rp. 65.000" },
        { nama: "PASHMINA CRINKLE MILO", harga: "Rp. 65.000" },
        { nama: "PASHMINA CRINKLE NAVY", harga: "Rp. 65.000" },
      ]
    },
    // Produk 4
    {
      id: 4,
      nama: "PASHMINA KAOS RAYON",
      deskripsi: "Pashmina kaos rayon adalah hijab dengan bahan kaos rayon yang super adem,lembut dikulit dan lentur",
      // Pesan WA spesifik untuk produk ini
      pesanWA: "Halo Nayra Scarf, saya tertarik dengan produk PASHMINA KAOS RAYON",
      gambar: [
        "images/kaosrayon-grey.jpg",
        "images/kaosrayon-khaki.jpg",
        "images/kaosrayon-milo.jpg",
        "images/kaosrayon-maroon.jpg",
        "images/kaosrayon-black.jpg",
        "images/kaosrayon-coklat.jpg",
      ],
      varian: [
        { nama: "PASHMINA KAOS RAYON GREY", harga: "Rp. 70.000" },
        { nama: "PASHMINA KAOS RAYON MILO", harga: "Rp. 70.000" },
        { nama: "PASHMINA KAOS RAYON KHAKI", harga: "Rp. 70.000" },
        { nama: "PASHMINA KAOS RAYON MAROON", harga: "Rp. 70.000" },
        { nama: "PASHMINA KAOS RAYON HITAM", harga: "Rp. 70.000" },
        { nama: "PASHMINA KAOS RAYON COKLAT", harga: "Rp. 70.000" },
      ]
    },
    // Produk 5
    {
      id: 5,
      nama: "PASHMINA SILK",
      deskripsi: "Pashmina Silk adalah jenis pashmina premium yang terbuat dari perpaduan serat pashmina dan sutra, memberikan kesan mewah, lembut, dan elegan saat dikenakan.",
      // Pesan WA spesifik untuk produk ini
      pesanWA: "Halo Nayra Scarf, saya tertarik dengan produk PASHMINA SILK.",
      gambar: [
        "images/pashmina_grey.jpeg",
        "images/pashmina_olivepale.jpeg",
        "images/pashminabrunate.jpeg",
        "images/pashminachoco.jpeg",
        "images/pashminamisty.jpeg",
        "images/pashminapistacio.jpeg"
      ],
      varian: [
        { nama: "PASHMINA SILK DARK GREY", harga: "Rp. 90.000" },
        { nama: "PASHMINA SILK OLIVEPALE", harga: "Rp. 90.000" },
        { nama: "PASHMINA SILK BRUNATE", harga: "Rp. 90.000" },
        { nama: "PASHMINA SILK CHOCO", harga: "Rp. 90.000" },
        { nama: "PASHMINA SILK SHOFT MISTY", harga: "Rp. 90.000" },
        { nama: "PASHMINA PISTACIO", harga: "Rp. 90.000" },
      ]
    },
    
    
  ];

  const produk = produkList.find(p => p.id === id);
  const detailContainer = document.getElementById("detailContainer");
  const ctaPesanContainer = document.getElementById("ctaPesanContainer");

  if (produk) {
    // 1. Membuat daftar varian produk
    const varianHTML = produk.varian.map((v, i) => `
      <div class="varian-card">
        <img src="${produk.gambar[i] || 'https://via.placeholder.com/300'}" alt="${v.nama}">
        <div class="varian-nama">${v.nama}</div>
        <div class="varian-harga">${v.harga}</div>
      </div>
    `).join("");

    // 2. Menampilkan detail produk utama
    detailContainer.innerHTML = `
      <h2 class="produk-nama-detail">${produk.nama}</h2>
      <p class="produk-deskripsi">${produk.deskripsi}</p>
      <div class="varian-grid">${varianHTML}</div>
    `;

    // 3. Membuat dan menampilkan tombol WhatsApp
    if (produk.pesanWA && ctaPesanContainer) {
      const pesanEncoded = encodeURIComponent(produk.pesanWA);
      const urlWA = `https://wa.me/${nomorWA}?text=${pesanEncoded}`;

      // MENGUBAH <button> MENJADI <a>
      ctaPesanContainer.innerHTML = `
        <h3>Tertarik dengan produk ini?</h3>
        <a href="${urlWA}" class="pesan-button" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.75 13.96c.25.13.4.38.4.66v1.43c0 .5-.32.94-.78 1.05a8.2 8.2 0 01-1.12.11 10.45 10.45 0 01-8.9-10.45 8.2 8.2 0 01.11-1.12c.11-.46.55-.78 1.05-.78h1.43c.28 0 .53.15.66.4a10.97 10.97 0 001.2 4.34c.14.28.06.63-.18.8L9.9 10.5a.5.5 0 00-.05.7c.62 1.1 1.43 2.15 2.58 3.12l.02.02c.97.85 1.95 1.57 3.05 2.12a.5.5 0 00.7-.05l1.32-1.32c.24-.24.59-.32.88-.18a10.97 10.97 0 004.34 1.2zM12 2a10 10 0 00-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10z"/></svg>
          <span>Pesan via WhatsApp</span>
        </a>
      `;
    }

  } else {
    detailContainer.innerHTML = "<p>Produk tidak ditemukan.</p>";
  }
});