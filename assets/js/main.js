// News Data
const newsData = {
  headlines: [
    {
      id: 1,
      title: "Presiden Jokowi Resmikan Proyek Infrastruktur Tol Trans Sumatera Sepanjang 2.818 Kilometer",
      excerpt:
        "Presiden Joko Widodo (Jokowi) meresmikan dua ruas jalan tol Trans Sumatera yakni ruas Indrapura-Kisaran seksi 2 (Lima Puluh-Kisaran) dan Bayung Lencir-Tempino pada ruas jalan tol Betung-Jambi, hari ini. Jokowi berharap jalan tol yang baru diresmikan itu bisa meningkatkan mobilitas antar...",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      category: "Berita",
      date: "19 Agustus 2025",
      author: "Cikal Sundana",
      isLarge: true,
    },
  ],
  featured: [
    {
      id: 1,
      title: "Daftar Distributor Pupuk Bersubsidi 2025 Dibuka, Unit Usaha Koperasi Merah Putih Siap Join Pupuk Indonesia",
      image: "https://img.sokoguru.id/backend/1080572539347616894/daftar-distributor-pupuk-bersubsidi-2025-dibuka-unit-usaha-koperasi-merah-putih-siap-join-pupuk-indonesia.webp",
      category: "Berita",
      date: "20 Juni 2026",
      author: "Yandy Laurens",
      excerpt: "PT Pupuk Indonesia (Persero) kembali membuka kesempatan bagi calon mitra yang ingin menjadi distributor pupuk bersubsidi untuk tahun anggaran...",
      slug: "daftar-distributor-pupuk-bersubsidi-2025-dibuka-unit-usaha-koperasi-merah-putih-siap-join-pupuk-indonesia",
    },
  ],
  trending: [
    {
      id: 4,
      title: "Kemendag Umumkan Harga Referensi CPO Minggu Ini: Naik Rp500 Menjadi Rp14.500 pada Periode Agustus 2024",
      date: "1 jam yang lalu",
      author: "Admin Redaksi",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      slug: "kemendag-umumkan-harga-referensi-cpo-minggu-ini-naik-rp500-menjadi-rp14500-pada-periode-agustus-2024",
    },
    {
      id: 5,
      title: "Mahasiswa Indonesia Raih Juara 1 Kompetisi Robotika Internasional di Jepang dengan Inovasi Ramah Lingkungan",
      date: "3 jam yang lalu",
      author: "Redaksi Teknologi",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      slug: "mahasiswa-indonesia-raih-juara-1-kompetisi-robotika-internasional-di-jepang-dengan-inovasi-ramah-lingkungan",
    },
    {
      id: 6,
      title: "Pemerintah Luncurkan Program Beasiswa Digital untuk 10.000 Mahasiswa Berprestasi se-Indonesia",
      date: "5 jam yang lalu",
      author: "Tim Pendidikan",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      slug: "pemerintah-luncurkan-program-beasiswa-digital-untuk-10000-mahasiswa-berprestasi-se-indonesia",
    },
    {
      id: 7,
      title: "Festival Kuliner Nusantara 2024 Hadirkan 500 Stand UMKM dari Seluruh Indonesia di Jakarta",
      date: "7 jam yang lalu",
      author: "Redaksi Kuliner",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      slug: "festival-kuliner-nusantara-2024-hadirkan-500-stand-umkm-dari-seluruh-indonesia-di-jakarta",
    },
  ],
  other: [
    {
      id: 9,
      title: "Sistem Anti Korupsi Berbasis Blockchain Diluncurkan Pemerintah untuk Transparansi Anggaran Negara",
      excerpt: "Teknologi blockchain diharapkan dapat meningkatkan transparansi dan akuntabilitas dalam pengelolaan keuangan negara.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      category: "Tekno",
      date: "18 Desember 2024",
      author: "Political Desk",
    },
    {
      id: 10,
      title: "Cara Efektif Mendapatkan Beasiswa S2 Luar Negeri: Tips dari Alumni yang Berhasil Kuliah Gratis",
      excerpt: "Panduan lengkap persiapan beasiswa luar negeri dari pengalaman alumni Indonesia yang sukses.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
      category: "Inspirasi",
      date: "10 Agustus 2025",
      author: "Education Team",
    },
    {
      id: 11,
      title: "Seputar Manfaat Tanaman Herbal Indonesia: 5 Jenis Tanaman yang Terbukti Berkhasiat untuk Kesehatan",
      excerpt: "Eksplorasi kekayaan tanaman herbal Nusantara yang memiliki khasiat luar biasa untuk kesehatan tubuh.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600",
      category: "Lokal",
      date: "22 Oktober 2025",
      author: "Health Team",
    },
    {
      id: 12,
      title: "Startup Indonesia Sukses Raih Pendanaan Seri A Senilai $10 Juta untuk Ekspansi ke Asia Tenggara",
      excerpt: "Pencapaian membanggakan startup teknologi Indonesia dalam menarik investasi dari investor internasional.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600",
      category: "Bisnis",
      date: "21 November 2026",
      author: "Business Desk",
    },
    {
      id: 13,
      title: "Wisata Alam Indonesia Masuk 10 Besar Destinasi Terpopuler Dunia Versi National Geographic",
      excerpt: "Keindahan alam Indonesia kembali mendapat pengakuan internasional sebagai destinasi wisata terbaik.",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600",
      category: "Lokal",
      date: "3 Juni 2025",
      author: "Travel Team",
    },
    {
      id: 14,
      title: "Chef Indonesia Raih Penghargaan Internasional dengan Menu Fusion Modern Berbahan Lokal Nusantara",
      excerpt: "Kreativitas kuliner anak bangsa dalam mengangkat cita rasa Indonesia di panggung internasional.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
      category: "Kreatif",
      date: "31 Januari 2025",
      author: "Lifestyle Team",
    },
    {
      id: 15,
      title: "Chef Indonesia Raih Penghargaan Internasional dengan Menu Fusion Modern Berbahan Lokal Nusantara",
      excerpt: "Kreativitas kuliner anak bangsa dalam mengangkat cita rasa Indonesia di panggung internasional.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
      category: "Kreatif",
      date: "31 Januari 2025",
      author: "Lifestyle Team",
    },
  ],
  latest: [
    {
      id: 15,
      title: "Update Cuaca: BMKG Peringatkan Potensi Hujan Lebat di Wilayah Jabodetabek Hingga 3 Hari Ke Depan",
      time: "15 menit yang lalu",
      category: "Soko Bola",
    },
    {
      id: 16,
      title: "Ekonomi: Rupiah Menguat Tipis ke Level Rp15.200 per USD Didukung Optimisme Investor Asing",
      time: "30 menit yang lalu",
      category: "Soko Berita",
    },
    {
      id: 17,
      title: "Olahraga: Tim Sepak Bola Indonesia Lolos ke Babak Final Piala AFF dengan Skor Telak 3-0",
      time: "45 menit yang lalu",
      category: "Soko Kreatif",
    },
    {
      id: 18,
      title: "Kesehatan: Kemenkes Luncurkan Aplikasi Telemedicine Gratis untuk Masyarakat Daerah Terpencil",
      time: "1 jam yang lalu",
      category: "Soko Kreatif",
    },
  ],
};

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize components
  initializeSearch();
  loadHeadlineNews();
  loadFeaturedNews();
  loadTrendingNews();
  loadOtherNews();
  loadLatestNews();
  initializeNavigation();

  console.log("SokoGuru website loaded successfully!");
});

// Search functionality
function initializeSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
      console.log("Searching for:", query);
      alert(`Mencari berita: "${query}"\n\nFitur pencarian akan segera tersedia!`);
    }
  }

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });
}

// Load headline news - FIXED VERSION
function loadHeadlineNews() {
  const container = document.getElementById("headlineNews");

  newsData.headlines.forEach((news, index) => {
    const cardClass = news.isLarge ? "news-card-large" : "";

    const newsHTML = `
      <div class="mb-4">
        <div class="news-card ${cardClass} fade-in clickable-card" 
             style="animation-delay: ${index * 0.1}s; cursor: pointer;" 
             data-news-id="${news.id}">
          <div class="news-headline">
            <img src="${news.image}" alt="${news.title}">
            <div class="news-overlay">
              <p class="badge text-bg-danger fw-semibold fs-5">${news.category}</p>
              <h1 class="fw-semibold">
                ${news.title}
              </h1>
              <div class="d-flex gap-3 align-items-center">
                <div class="d-flex gap-1 align-items-center">
                  <i class="bi bi-calendar3"></i>
                  <p class="headline-meta mb-0">${news.date}</p>
                </div>
                <div class="d-flex gap-1 align-items-center">
                  <i class="bi bi-person-circle"></i>
                  <p class="headline-meta mb-0">${news.author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += newsHTML;
  });
}

// Load featured news (card utama dengan button)
function loadFeaturedNews() {
  const container = document.getElementById("featuredNews");
  container.innerHTML = ""; // Clear existing conten

  newsData.featured.forEach((news, index) => {
    const featuredHTML = `
    <div class="">
      <div class="news-card fade-in" style="animation-delay: 0.1s">
          <div class="position-relative">
              <img src="${news.image}" alt="${news.title}" class="news-card-image">
              <span class="news-category">${news.category}</span>
          </div>
          <div class="card-body">
              <h5 class="fw-semibold">
                  <a href="/berita/${news.slug}" class="link-dark link-offset-2 link-underline link-underline-opacity-0">${news.title}</a>
              </h5>
              <div class="d-flex gap-3 mb-3">
                <div class="d-flex gap-1 align-items-center">
                  <i class="bi bi-calendar3"></i>
                  <p class="news-meta mb-0">${news.date}</p>
                </div>
                <div class="d-flex gap-1 align-items-center">
                  <i class="bi bi-person-circle"></i>
                  <p class="news-meta mb-0">${news.author}</p>
                </div>
              </div>
              <p class="news-excerpt">${news.excerpt}</p>
              <button type="button" class="btn btn-danger" onclick="navigateToNews('${news.slug}')">
                Baca Selengkapnya
              </button>
          </div>
      </div>
    </div>
  `;

    container.innerHTML = featuredHTML;
  });
}

function loadTrendingNews() {
  const container = document.getElementById("trendingNews");
  container.innerHTML = ""; // Clear existing content

  newsData.trending.forEach((news, index) => {
    const trendingHTML = `
      <div class="row g-0 mb-4 border rounded-4 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative clickable-trending-card" 
           style="cursor: pointer; transition: all 0.3s ease;" 
           data-news-slug="${news.slug}">
        <div class="col-auto d-none d-lg-block">              
          <img src="${news.image}" alt="${news.title}" width="200" height="131" class="bd-placeholder-img">
        </div>
        <div class="col p-3 d-flex flex-column position-static">
          <h5 class="fw-semibold">
            ${news.title}
          </h5>
          <div class="d-flex gap-3">
            <div class="d-flex gap-1 align-items-center">
              <i class="bi bi-calendar3"></i>
              <p class="news-meta mb-0">${news.date}</p>
            </div>
            <div class="d-flex gap-1 align-items-center">
              <i class="bi bi-person-circle"></i>
              <p class="news-meta mb-0">${news.author}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += trendingHTML;
  });

  // Add click listeners untuk trending cards
  addTrendingCardListeners();
}

// Event listeners untuk trending cards
function addTrendingCardListeners() {
  const trendingCards = document.querySelectorAll(".clickable-trending-card");

  trendingCards.forEach((card) => {
    card.addEventListener("click", function () {
      const newsSlug = this.getAttribute("data-news-slug");
      navigateToNews(newsSlug);
    });
  });
}

// Load other news with static 3-row layout
function loadOtherNews() {
  const container = document.getElementById("otherNews");
  const news = newsData.other;

  let newsHTML = "";

  // BARIS PERTAMA - 3 Cards
  newsHTML += `<div class="row">`;
  for (let i = 0; i < 3; i++) {
    if (news[i]) {
      newsHTML += `
        <div class="col-md-4 mb-4">
          <div class="news-card fade-in" style="animation-delay: ${i * 0.1}s">
            <div class="position-relative">
              <img src="${news[i].image}" alt="${news[i].title}" class="news-other-image w-100" style="height: 200px; object-fit: cover;">
              <span class="news-category">${news[i].category}</span>
            </div>
            <div class="card-body p-3">
              <h6 class="fw-semibold mb-2">
                <a href="#" class="link-dark link-offset-2 link-underline link-underline-opacity-0" onclick="readNews(${news[i].id})">${news[i].title}</a>
              </h6>
              <p class="text-muted small mb-2">${news[i].excerpt}</p>
              <div class="d-flex gap-3 small text-muted">
                <div class="d-flex align-items-center gap-1">
                  <i class="bi bi-calendar3"></i>
                  <span>${news[i].date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
  newsHTML += `</div>`;

  // BARIS KEDUA - 1 Wide Card
  if (news[3]) {
    newsHTML += `
      <div class="row">
        <div class="col-12 mb-4">
          <div class="row g-0 rounded-4 overflow-hidden shadow h-md-250 position-relative fade-in" style="animation-delay: 0.3s">
            <div class="col-md-8 p-4 d-flex flex-column position-static">
              <div class="d-flex align-items-center gap-2 mb-2">
                <span class="badge text-bg-danger fw-semibold" style="border-radius: 4px; padding: 8px">${news[3].category}</span>
              </div>
              <h4 class="fw-semibold mb-3">
                <a href="#" class="link-dark link-offset-2 link-underline link-underline-opacity-0" onclick="readNews(${news[3].id})">${news[3].title}</a>
              </h4>
              <p class="text-muted mb-3">${news[3].excerpt}</p>
              <div class="d-flex gap-4 small text-muted mt-auto">
                <div class="d-flex gap-1">
                  <i class="bi bi-calendar3"></i>
                  <p class="news-meta mb-0">${news[3].date}</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-none d-md-block">
              <img src="${news[3].image}" alt="${news[3].title}" class="w-100 h-100" style="object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // BARIS KETIGA - 3 Cards
  newsHTML += `<div class="row">`;
  for (let i = 4; i < 7; i++) {
    if (news[i]) {
      newsHTML += `
        <div class="col-md-4">
          <div class="news-card fade-in" style="animation-delay: ${(i - 4) * 0.1}s">
            <div class="position-relative">
              <img src="${news[i].image}" alt="${news[i].title}" class="news-other-image w-100" style="height: 200px; object-fit: cover;">
              <span class="news-category">${news[i].category}</span>
            </div>
            <div class="card-body p-3">
              <h6 class="fw-semibold mb-2">
                <a href="#" class="link-dark link-offset-2 link-underline link-underline-opacity-0" onclick="readNews(${news[i].id})">${news[i].title}</a>
              </h6>
              <p class="text-muted small mb-2">${news[i].excerpt}</p>
              <div class="d-flex gap-3 small text-muted">
                <div class="d-flex align-items-center gap-1">
                  <i class="bi bi-calendar3"></i>
                  <span>${news[i].date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
  newsHTML += `</div>`;

  container.innerHTML = newsHTML;
}

// Load latest news for sidebar
function loadLatestNews() {
  const container = document.getElementById("beritaTerbaru");

  newsData.latest.forEach((news, index) => {
    const latestHTML = `
      <div class="latest-news-item">
        
        <div class="latest-news-content">
          <a href="#" class="latest-news-title" onclick="readNews(${news.id})">
            ${news.title}
          </a>
          <div class="d-flex align-items-center justify-content-between">
            <a href="#" class="latest-news-category">
              ${news.category}
            </a>
          </div>
         
        </div>
      </div>
    `;

    container.innerHTML += latestHTML;
  });
}

// Navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      const category = this.getAttribute("data-category");
      filterNewsByCategory(category);
    });
  });
}

// Filter news by category
function filterNewsByCategory(category) {
  console.log("Filtering by category:", category);

  if (category === "semua") {
    // Show all news
    showAllNews();
  } else {
    // Filter news by category
    filterNews(category);
  }
}

// Show all news
function showAllNews() {
  // Reset all news sections to show all content
  loadHeadlineNews();
  loadTrendingNews();
  loadOtherNews();
}

// Filter news function
function filterNews(category) {
  // In a real application, this would filter the news data
  // For demo purposes, we'll just show a message
  console.log(`Filtering news for category: ${category}`);

  // Add loading effect
  const containers = ["headlineNews", "trendingNews", "otherNews"];
  containers.forEach((containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '<div class="text-center"><div class="loading-spinner"></div><p>Memuat berita ' + category + "...</p></div>";
  });

  // Simulate loading delay
  setTimeout(() => {
    // In real app, load filtered data here
    // For now, reload all data
    loadHeadlineNews();
    loadTrendingNews();
    loadOtherNews();
  }, 1000);
}

// Read news function
function readNews(newsId) {
  console.log("Reading news with ID:", newsId);

  // Find the news item
  let newsItem = null;

  // Search in all news arrays
  const allNews = [...newsData.headlines, ...newsData.trending, ...newsData.other, ...newsData.latest];
  newsItem = allNews.find((news) => news.id === newsId);

  if (newsItem) {
    // In a real application, this would navigate to the news detail page
    alert(`Membaca berita: "${newsItem.title}"\n\nHalaman detail berita akan segera tersedia!`);
  } else {
    alert("Berita tidak ditemukan!");
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Newsletter subscription
function subscribeNewsletter() {
  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (email && validateEmail(email)) {
    alert(`Terima kasih! Email ${email} telah berhasil didaftarkan untuk newsletter SokoGuru.`);
    emailInput.value = "";
  } else {
    alert("Mohon masukkan alamat email yang valid.");
  }
}

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add event listener for newsletter subscription
document.addEventListener("DOMContentLoaded", function () {
  const subscribeBtn = document.querySelector('.btn-danger[type="button"]');
  if (subscribeBtn && subscribeBtn.textContent.includes("Subscribe")) {
    subscribeBtn.addEventListener("click", subscribeNewsletter);
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe all news cards for animation
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const newsCards = document.querySelectorAll(".news-card");
    newsCards.forEach((card) => {
      observer.observe(card);
    });
  }, 500);
});

// Sticky sidebar functionality
function initializeStickyElements() {
  const sidebar = document.querySelector(".sidebar-sticky");
  const mainContent = document.querySelector(".news-main-section");

  if (sidebar && mainContent) {
    // Calculate the offset for sticky positioning
    const headerHeight = document.querySelector(".header-main").offsetHeight;
    sidebar.style.top = headerHeight + 20 + "px";
  }
}

// Initialize sticky elements after DOM is loaded
document.addEventListener("DOMContentLoaded", initializeStickyElements);

// Resize handler for responsive sticky behavior
window.addEventListener("resize", function () {
  if (window.innerWidth < 992) {
    // On mobile, disable sticky behavior
    const sidebar = document.querySelector(".sidebar-sticky");
    if (sidebar) {
      sidebar.style.position = "relative";
      sidebar.style.top = "auto";
    }
  } else {
    // Re-enable sticky on larger screens
    initializeStickyElements();
  }
});

console.log("SokoGuru JavaScript loaded successfully!");
