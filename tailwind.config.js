// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        heritage: {
          bg: '#F9F6F0',       // Vàng kem giấy sắc phong [cite: 35, 36]
          primary: '#8B1E0F',  // Đỏ son đình chùa [cite: 37, 38]
          gold: '#D4AF37',     // Vàng đồng tâm linh [cite: 39, 40]
          dark: '#2C2523',     // Nâu sẫm thay cho đen thuần [cite: 41, 42]
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Dành cho tiêu đề [cite: 45]
        sans: ['"Inter"', 'sans-serif'],        // Dành cho nội dung [cite: 45]
      }
    }
  }
}