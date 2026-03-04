/*
  # Add Initial Content Data

  1. Initial Data
    - Insert sample services
    - Insert sample testimonials  
    - Insert sample brands
    - Insert sample why_us items
    - Insert sample experts

  2. Notes
    - Uses ON CONFLICT DO NOTHING to safely re-run
    - Provides demo content for the admin panel to manage
*/

-- Insert sample services
INSERT INTO services (icon, title, description, order_index) VALUES
  ('Ear', 'İleri Teknoloji İşitme Cihazları', 'En son teknolojiye sahip, kişiye özel programlanabilen işitme cihazları ile günlük yaşamınızı kolaylaştırın.', 1),
  ('Stethoscope', 'Ücretsiz İşitme Testleri', 'Uzman kadromuz ile kapsamlı işitme testleri ve değerlendirmeleri. Odyometrik ölçümler ve detaylı analizler.', 2),
  ('Baby', 'Pediatrik İşitme Çözümleri', 'Çocuklarınız için özel olarak tasarlanmış, güvenli ve etkili işitme çözümleri ile onların gelişimini destekleyin.', 3),
  ('Settings', 'Cihaz Bakım ve Ayarlama', 'İşitme cihazınızın düzenli bakımı, temizliği ve profesyonel ayarlamaları ile maksimum performans.', 4)
ON CONFLICT DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (author_name, rating, comment, date, order_index) VALUES
  ('Mehmet Yılmaz', 5, 'Ases İşitme sayesinde torunumun fısıltısını bile duyabiliyorum. Hayatım tamamen değişti, sosyal yaşamıma geri döndüm.', '2 hafta önce', 1),
  ('Ayşe Demir', 5, 'İş toplantılarında artık hiçbir şeyi kaçırmıyorum. Bluetooth özelliği sayesinde telefonumu rahatça kullanabiliyorum.', '1 ay önce', 2),
  ('Ali Kaya', 5, 'Esma Hanım''ın ilgisi ve profesyonelliği beni çok etkiledi. Cihazım o kadar rahat ki varlığını unutuyorum.', '3 hafta önce', 3)
ON CONFLICT DO NOTHING;

-- Insert sample brands
INSERT INTO brands (name, logo_url, description, order_index) VALUES
  ('Phonak', '/phonak.png', 'Dünya lideri işitme teknolojileri', 1),
  ('Oticon', '/oticon-logo.png', 'Danimarkanın en iyisi', 2),
  ('Bernafon', '/bernafon-logo.wine.png', 'İsviçre kalitesi', 3)
ON CONFLICT DO NOTHING;

-- Insert sample why us items
INSERT INTO why_us_items (icon, title, description, order_index) VALUES
  ('Award', '7 Yıllık Deneyim', 'İşitme sağlığı alanında 7 yıllık uzmanlık ve binlerce mutlu hasta', 1),
  ('Users', 'Uzman Kadro', 'Alanında uzman, deneyimli ve güler yüzlü personelimiz', 2),
  ('Shield', 'Güvenilir Hizmet', 'Kaliteli hizmet anlayışı ve müşteri memnuniyeti odaklı yaklaşım', 3),
  ('Headphones', 'En İyi Markalar', 'Dünya lideri işitme cihazı markalarının yetkili distribütörüyüz', 4)
ON CONFLICT DO NOTHING;

-- Insert sample expert
INSERT INTO experts (name, title, image_url) VALUES
  ('Uzman Kadromuz', 'İşitme Sağlığı Uzmanları', '/kadro.png')
ON CONFLICT DO NOTHING;