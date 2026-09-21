// ============================================================
//  PERINGATAN: aplikasi ini SENGAJA dibuat rentan untuk praktikum.
//  Jangan gunakan kode ini (atau pola di dalamnya) di production.
//  Semua "secret" di bawah ini PALSU (hanya untuk simulasi).
// ============================================================

module.exports = {
  port: process.env.PORT || 3000,

  // Secret dibaca dari environment (secret manager / GitHub Secrets).
  // Jangan taruh nilai asli di source code. Untuk lokal, salin .env.example ke .env.
  // Fallback dummy hanya agar unit test lokal/CI bisa jalan tanpa secret asli.
  jwtSecret: process.env.JWT_SECRET || 'test-only-dummy-jwt-secret-change-me',

  // API key payment gateway (palsu) — wajib via env di production
  paymentGatewayApiKey: process.env.PAYMENT_GATEWAY_API_KEY || 'test-only-dummy-key-change-me',

  // Pengaturan default aplikasi
  defaultSettings: {
    currency: 'IDR',
    dailyTransferLimit: 10000000,
    notifications: { email: true, sms: false },
  },
};
