RAMZ AI — PANDUAN SINGKAT

ISI PROJECT
- index.html : tampilan website
- api/chat.js : server yang menghubungkan website ke Gemini
- package.json : metadata project

PENTING
API key hanya dipasang di Vercel sebagai Environment Variable bernama GEMINI_API_KEY.
Jangan tulis API key di index.html, jangan unggah API key ke GitHub, dan jangan bagikan key ke siapa pun.

CARA ONLINE
1. Buat repository GitHub baru bernama ramz-ai.
2. Upload semua isi folder project ini ke repository (termasuk folder api).
3. Buat API key di Google AI Studio: https://aistudio.google.com/app/apikey
4. Buka Vercel dan pilih Add New > Project, lalu import repository ramz-ai.
5. Sebelum deploy, tambahkan Environment Variable:
   Name: GEMINI_API_KEY
   Value: (API key dari Google AI Studio)
   Environment: Production, Preview, Development
6. Klik Deploy.
7. Setelah selesai, buka alamat .vercel.app yang diberikan Vercel.
8. Jika mengubah API key, lakukan redeploy.

CATATAN
- Paket gratis memiliki batas pemakaian dan dapat berubah. Periksa harga dan batas resmi Gemini API.
- Website contoh ini belum memiliki login, database chat permanen, atau pembatasan pengguna yang kuat.
- Jangan gunakan untuk menyimpan data sensitif.
