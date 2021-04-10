USE ucode_web;
CREATE TABLE IF NOT EXISTS heroes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  description VARCHAR(400) NOT NULL,
  race VARCHAR(400) DEFAULT 'human' NOT NULL,
  class_role ENUM('tankman', 'dps', 'healer') NOT NULL
);