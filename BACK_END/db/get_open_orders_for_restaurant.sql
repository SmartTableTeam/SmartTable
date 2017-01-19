SELECT 
o.id as order_id, t.table_number, o.create_time,
(SELECT COUNT(*) FROM order_items oi where oi.order_id = o.id) as order_item_count
FROM orders o
JOIN table_accounts t ON o.table_account_id = t.id
WHERE t.restaurant_id=$1 AND o.status=1
ORDER BY create_time