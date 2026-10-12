# FINDUM — Lost & Found Kampus

Website prototipe (HTML, CSS, JavaScript biasa, tanpa framework).

## Cara menjalankan
Buka `index.html` di browser. Tidak perlu instalasi.

## Struktur
- `index.html` Beranda · `cari.html` Cari Barang · `detail.html` Detail Barang
- `laporkan.html` pilihan lapor · `lapor-hilang.html` · `lapor-temuan.html`
- `klaim.html` Klaim & Verifikasi · `cara-kerja.html` · `faq.html`
- `css/style.css` semua gaya (warna dan font ada di variabel `:root`)
- `js/data.js` data simulasi + fungsi bersama · `js/main.js` menu
- `js/search.js` pencarian/filter · `js/report.js` form lapor + denah + pencocokan
- `js/detail.js`, `js/claim.js` · `assets/img/` gambar

## Catatan
- Data disimpan di `localStorage` browser (simulasi), bukan database.
- Kontak pengelola di `faq.html` masih placeholder, isi dengan kontak resmi.
- Hosting gratis: Vercel, Netlify, atau GitHub Pages (upload seluruh folder).
