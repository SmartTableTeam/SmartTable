SELECT mi.id,mi.menu_id,mi.price,mi.name,mi.description,mi.notes,mi.allergy_warning,mi.ingredients,mi.photo_url 
FROM menu_items mi
JOIN menus m on m.id = mi.menu_id
WHERE restaurant_id =$1;