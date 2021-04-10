CREATE DATABASE IF NOT EXISTS ucode_web;
CREATE USER 'iantypin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'securepass';
GRANT ALL PRIVILEGES ON * . * TO 'iantypin'@'localhost';
FLUSH PRIVILEGES;