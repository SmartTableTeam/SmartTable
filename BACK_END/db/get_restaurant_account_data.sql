SELECT a.email, r.id AS restaurant_id, r.account_id, r.name, r.address, r.city, r.state, r.phone_number 
FROM accounts a 
JOIN restaurants r ON a.id=r.account_id
WHERE a.id=$1 