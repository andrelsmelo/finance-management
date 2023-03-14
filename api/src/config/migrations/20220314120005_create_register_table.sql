-- 20220314120002_create_register_table.sql

CREATE TABLE register (
  id INT(11) NOT NULL AUTO_INCREMENT,
  client_id INT(11) NOT NULL,
  register_date DATE NOT NULL,
  value DECIMAL(10,2) NOT NULL,
  category_id INT(11) NOT NULL,
  revenue_type_id INT(11) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_register_client FOREIGN KEY (client_id) REFERENCES clients (id),
  CONSTRAINT fk_register_category FOREIGN KEY (category_id) REFERENCES categories (id),
  CONSTRAINT fk_register_revenue_type FOREIGN KEY (revenue_type_id) REFERENCES revenue_types (id)
);
