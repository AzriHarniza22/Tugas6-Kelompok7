README - Tugas 6 Kelompok 7
📚 Aplikasi manajemen data peserta yang dibangun menggunakan AdonisJS sebagai bagian dari Tugas 6 praktikum Pengembangan Perangkat Lunak.

✨ Fitur
Melihat daftar peserta

Menambahkan data peserta

Menampilkan detail peserta

Halaman welcome

🔧 Teknologi yang Digunakan
AdonisJS v5 (TypeScript)

Edge Templating (untuk tampilan)

Node.js

npm untuk package management

🚀 Cara Menjalankan Proyek
1. Clone repositori ini
git clone https://github.com/AzriHarniza22/Tugas6-Kelompok7.git
cd Tugas6-Kelompok7/my-adonis-app

2. Install dependencies
npm install

3. Copy konfigurasi environment
cp .env.example .env

4. Jalankan server
npm run dev

Server akan berjalan di http://localhost:3333

5. (Opsional) Jalankan migrasi database jika menggunakan database
node ace migration:run

📁 Struktur Folder Penting
my-adonis-app/
├── start/ → Konfigurasi awal AdonisJS (routes, kernel, env)
├── resources/
│ └── views/ → Template halaman (Edge)
│ └── pages/participants/
├── .env → Konfigurasi environment
├── ace.js → Entry point Adonis
├── package.json → Dependency dan script

👥 Anggota Kelompok 7
Azri Harniza – 2208107010034
M.nouval rifqi – 2208107010075
Tiara Agustin – 2208107010004
