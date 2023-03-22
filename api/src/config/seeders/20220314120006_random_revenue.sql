-- 20220314120006_random_revenue.sql

INSERT INTO revenues (user_id, category_id, amount, date)
SELECT
users.id AS user_id,
categories.id AS category_id,
ROUND(RAND() * 10000, 2) AS amount,
DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365) DAY) AS date
FROM users
CROSS JOIN categories
ORDER BY RAND()
LIMIT 120;