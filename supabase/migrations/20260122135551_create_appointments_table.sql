/*
  # Create appointments table

  ## Description
  Creates a table to store appointment requests from the contact form.
  Allows potential clients to request appointments by providing their contact
  information and preferred appointment details.

  ## New Tables
  1. `appointments`
     - `id` (uuid, primary key) - Unique identifier for each appointment
     - `first_name` (text) - Client's first name
     - `last_name` (text) - Client's last name
     - `phone` (text) - Client's phone number
     - `email` (text) - Client's email address
     - `message` (text, optional) - Additional message or reason for appointment
     - `preferred_date` (timestamp with timezone, optional) - Client's preferred appointment date
     - `status` (text) - Appointment status (pending, confirmed, completed, cancelled)
     - `created_at` (timestamp with timezone) - When the appointment was requested

  ## Security
  - Enable RLS on `appointments` table
  - Allow anyone to create appointments (public form submission)
  - Only authenticated users can view appointments (for admin panel in future)
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  message text DEFAULT '',
  preferred_date timestamptz,
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create appointments"
  ON appointments FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all appointments"
  ON appointments FOR SELECT
  TO authenticated
  USING (true);