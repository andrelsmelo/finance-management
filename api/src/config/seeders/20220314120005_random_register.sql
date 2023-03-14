-- 20220314120005_random_register.sql

INSERT INTO registers (client_id, register_date, value, category_id)
SELECT
clients.id AS client_id,
DATE_SUB(CURDATE(),
INTERVAL FLOOR(RAND() * 30) DAY) AS register_date,
FLOOR(RAND() * 1000) AS value,
categories.id AS category_id
FROM clients
CROSS JOIN categories
WHERE revenue_type IN ('Income', 'Outcome')
ORDER BY RAND()
LIMIT 120
