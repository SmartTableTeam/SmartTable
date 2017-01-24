SELECT oi.id, oi.menu_item_id, mi.name, mi.price, oi.order_id, oi.notes 
FROM order_items oi
JOIN menu_items mi ON oi.menu_item_id = mi.id
WHERE oi.order_id = $1;