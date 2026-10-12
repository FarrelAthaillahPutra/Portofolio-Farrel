# Portfolio Farrel Athaillah Putra

Website portofolio dengan Next.js (App Router). Semua isi (teks, proyek, pengalaman) ada di `data/content.js`.

## Menjalankan di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Deploy ke Vercel

1. Upload folder ini ke repository GitHub.
2. Di Vercel, pilih Add New, lalu Project, dan import repository tadi.
3. Biarkan pengaturan default (Vercel mengenali Next.js otomatis), lalu klik Deploy.

## Yang perlu diganti

- Link "Project link" di `data/content.js` (sekarang mengarah ke GitHub).
- Ilustrasi proyek di `components/Thumbs.js` dengan screenshot asli, kalau ada.
- Foto profil: ganti `public/foto.jpg`.

## Struktur

```
app/layout.js        font dan metadata
app/page.js          susunan halaman
app/globals.css      semua gaya
components/          LayersNav, Hero, Sel, Thumbs
data/content.js      isi website
public/foto.jpg      foto profil
```
