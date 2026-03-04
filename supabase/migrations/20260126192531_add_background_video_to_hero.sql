/*
  # Add Background Video Support to Hero Content

  1. Changes
    - Add `background_video` column to `hero_content` table
      - Optional text field for video URL
      - Allows using video backgrounds instead of static images

  2. Notes
    - Video is optional - falls back to background_image if not provided
    - Supports MP4 video format
    - Videos should be optimized for web (compressed, short duration)
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'hero_content' AND column_name = 'background_video'
  ) THEN
    ALTER TABLE hero_content ADD COLUMN background_video text;
  END IF;
END $$;