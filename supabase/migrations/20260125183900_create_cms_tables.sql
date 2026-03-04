/*
  # Admin Panel - Content Management System Tables

  1. New Tables
    - `hero_content`
      - `id` (uuid, primary key)
      - `title` (text)
      - `subtitle` (text)
      - `cta_text` (text)
      - `background_image` (text)
      - `updated_at` (timestamptz)
    
    - `services`
      - `id` (uuid, primary key)
      - `icon` (text) - Lucide icon name
      - `title` (text)
      - `description` (text)
      - `order_index` (integer)
      - `created_at` (timestamptz)
    
    - `brands`
      - `id` (uuid, primary key)
      - `name` (text)
      - `logo_url` (text)
      - `description` (text)
      - `order_index` (integer)
      - `created_at` (timestamptz)
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `author_name` (text)
      - `rating` (integer)
      - `comment` (text)
      - `date` (text)
      - `order_index` (integer)
      - `created_at` (timestamptz)
    
    - `experts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `title` (text)
      - `image_url` (text)
      - `created_at` (timestamptz)
    
    - `why_us_items`
      - `id` (uuid, primary key)
      - `icon` (text) - Lucide icon name
      - `title` (text)
      - `description` (text)
      - `order_index` (integer)
      - `created_at` (timestamptz)
    
    - `site_settings`
      - `id` (uuid, primary key)
      - `key` (text, unique)
      - `value` (text)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add public read policies for all tables
    - Add authenticated user policies for insert/update/delete operations
*/

-- Hero Content Table
CREATE TABLE IF NOT EXISTS hero_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT 'Bernaİşitme Cihazları Merkezi',
  subtitle text NOT NULL DEFAULT 'Profesyonel işitme çözümleri',
  cta_text text NOT NULL DEFAULT 'Ücretsiz Randevu Alın',
  background_image text DEFAULT '/arkaplan.jpg',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE hero_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read hero content"
  ON hero_content FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can update hero content"
  ON hero_content FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  icon text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete services"
  ON services FOR DELETE
  TO authenticated
  USING (true);

-- Brands Table
CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  description text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE brands ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read brands"
  ON brands FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert brands"
  ON brands FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update brands"
  ON brands FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete brands"
  ON brands FOR DELETE
  TO authenticated
  USING (true);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  rating integer DEFAULT 5,
  comment text NOT NULL,
  date text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

-- Experts Table
CREATE TABLE IF NOT EXISTS experts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE experts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read experts"
  ON experts FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert experts"
  ON experts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update experts"
  ON experts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete experts"
  ON experts FOR DELETE
  TO authenticated
  USING (true);

-- Why Us Items Table
CREATE TABLE IF NOT EXISTS why_us_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  icon text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE why_us_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read why us items"
  ON why_us_items FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert why us items"
  ON why_us_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update why us items"
  ON why_us_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete why us items"
  ON why_us_items FOR DELETE
  TO authenticated
  USING (true);

-- Site Settings Table
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value text NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site settings"
  ON site_settings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert site settings"
  ON site_settings FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update site settings"
  ON site_settings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert default hero content
INSERT INTO hero_content (title, subtitle, cta_text, background_image)
VALUES (
  'Bernaİşitme Cihazları Merkezi',
  'İşitme sağlığınız için profesyonel çözümler',
  'Ücretsiz Randevu Alın',
  '/arkaplan.jpg'
) ON CONFLICT DO NOTHING;

-- Insert default site settings
INSERT INTO site_settings (key, value) VALUES
  ('site_name', 'Bernaİşitme'),
  ('phone', '+90 XXX XXX XX XX'),
  ('email', 'info@bernaisitme.com'),
  ('address', 'Adres Bilgisi'),
  ('facebook_url', '#'),
  ('instagram_url', '#'),
  ('twitter_url', '#')
ON CONFLICT DO NOTHING;