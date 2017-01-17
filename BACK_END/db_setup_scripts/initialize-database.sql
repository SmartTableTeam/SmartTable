-- DROP existing TABLES, to clean out the database	=	=	=	=	=
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS menu_items;
DROP TABLE IF EXISTS menus;
DROP TABLE IF EXISTS table_accounts;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS accounts;

DROP SEQUENCE IF EXISTS order_items;
DROP SEQUENCE IF EXISTS orders;
DROP SEQUENCE IF EXISTS menu_items;
DROP SEQUENCE IF EXISTS menus;
DROP SEQUENCE IF EXISTS table_accounts;
DROP SEQUENCE IF EXISTS restaurants;
DROP SEQUENCE IF EXISTS customers;
DROP SEQUENCE IF EXISTS accounts;

-- CREATE primary key SEQUENCES	=	=	=	=	=	=	=	=	=	=
-- Note that all Primary Key sequences start at 100. PK ids < 100
-- are reserved for test data
CREATE SEQUENCE public.accounts_pk
   	INCREMENT 1
    START 100
    MINVALUE 1
;

CREATE SEQUENCE public.customers_pk
   	INCREMENT 1
    START 100
    MINVALUE 1
;

CREATE SEQUENCE public.restaurants_pk
   	INCREMENT 1
    START 100
    MINVALUE 1
;

CREATE SEQUENCE public.table_accounts_pk
   	INCREMENT 1
    START 100
    MINVALUE 1
;

CREATE SEQUENCE public.menus_pk
   	INCREMENT 1
    START 100
    MINVALUE 1
;

CREATE SEQUENCE public.menu_items_pk
   	INCREMENT 1
    START 100
    MINVALUE 1
;

CREATE SEQUENCE public.orders_pk
   	INCREMENT 1
    START 100
    MINVALUE 1
;

CREATE SEQUENCE public.order_items_pk
   	INCREMENT 1
    START 100
    MINVALUE 1
;


-- CREATE TABLES	=	=	=	=	=	=	=	=	=	=	=	=	=
CREATE TABLE public.accounts
(
	id integer NOT NULL DEFAULT nextval('accounts_pk'),
	join_date date,
	email text,
	password text,
	password_salt text,
	PRIMARY KEY (id)
);

CREATE TABLE public.customers
(
	id integer NOT NULL DEFAULT nextval('customers_pk'),
	account_id integer,
	first_name text,
	last_name text,
	PRIMARY KEY (id),
	FOREIGN KEY (account_id) REFERENCES public.accounts (id)
);

CREATE TABLE public.restaurants
(
	id integer NOT NULL DEFAULT nextval('restaurants_pk'),
	account_id integer,
	name text,
	address text,
	city text,
	state text, 
	phone_number text,
	PRIMARY KEY (id),
	FOREIGN KEY (account_id) REFERENCES public.accounts (id)
);

CREATE TABLE public.table_accounts
(
	id integer NOT NULL DEFAULT nextval('table_accounts_pk'),
	restaurant_id integer,
	table_number text,
	PRIMARY KEY (id),
	FOREIGN KEY (account_id) REFERENCES public.restaurants (id)
);

CREATE TABLE public.menus
( 
	id integer NOT NULL DEFAULT nextval('menus_pk'),
	restaurant_id integer,
	category text,
	description text,
	sort_num integer,
	banner_url text,
	PRIMARY KEY (id),
	FOREIGN KEY restaurant_id REFERENCES public.restaurants (id)
);
	
CREATE TABLE public.menu_items
(
	id integer NOT NULL DEFAULT nextval('menu_items_pk'),
	menu_id integer,
	price integer,
	name text,
	description text,
	notes text,
	allergy_warning text,
	ingredients text,
	photo_url text,
	PRIMARY KEY (id),
	FOREIGN KEY menu_id REFERENCES public.menus (id)
);

CREATE TABLE public.orders
(
	id integer NOT NULL DEFAULT nextval('orders_pk'),
	table_account_id integer,
	create_time date,
	status integer,
	PRIMARY KEY (id),
	FOREIGN KEY table_account_id REFERENCES public.table_accounts (id)
);

CREATE TABLE public.order_items
(
	id integer NOT NULL DEFAULT nextval('order_items_pk'),
	menu_item_id integer,
	order_id integer,
	notes text,
	PRIMARY KEY (id),
	FOREIGN KEY menu_item_id REFERENCES public.menu_items (id),
	FOREIGN KEY order_id REFERENCES public.orders (id)
);


-- INSERT test data =	=	=	=	=	=	=	=	=	=	=	=	=
-- setup basic account information for a restaurant
INSERT INTO public.accounts 
	(id, email, password, password_salt)
	VALUES (1, 'rest1@rest1.com', 'test', 'test');

INSERT INTO public.restaurants VALUES (5,1,'Squat & Gobble', '1234 Main', 'Provo', 'Utah', '801-555-1234');

INSERT INTO public.table_accounts VALUES (1,5,'ONE');
INSERT INTO public.table_accounts VALUES (2,5,'TWO');

-- setup a basic menu
INSERT INTO public.menus VALUES(1,5,'Drinks','Refreshing Drinks',2,'NA');
INSERT INTO public.menus VALUES(2,5,'Burgers','Fresh Cooked Meat',1,'NA');

INSERT INTO public.menu_items VALUES (1,1,159,'Soda', 'Sprite, Coca-cola, Barq\'s, Dr. Pepper','Free Refills','NA','HFC, Flavoring','http://assets.nydailynews.com/polopoly_fs/1.2124847.1424636064!/img/httpImage/image.jpg_gen/derivatives/article_750/soda23n-1-web.jpg');
INSERT INTO public.menu_items VALUES (2,1,599,'Beer', 'Budweiser, Skol, Guinness', '.50 Refills','NA','Contains Alcohol','https://www.guinness.com/media/1538/guinness_draught_spritzr06bg1_resized_1600-h.jpg?anchor=center&mode=crop&quality=75&width=750');
INSERT INTO public.menu_items VALUES (3,2,199,'Hamburger', 'A Basic Hamburger','Uses our special sauce','Gluten, Peanuts', 'Bun, Beef, Lettuce, Tomato, Onions', 'http://assets.historyhole.com/wp-content/uploads/2016/07/05010901/hamburger-iStock_000008300965_Medium-1024x780_br5vtp.jpg');
INSERT INTO public.menu_items VALUES (4,2,249,'Cheeseburger', 'A Basic Cheeseburger','Uses our special sauce','Gluten, Peanuts', 'Bun, Beef, Lettuce, Tomato, Onions, Cheese', 'http://dolcecarini.com/wp-content/uploads/2014/07/Cheeseburger.jpg');

-- now throw a couple of orders on the queue
INSERT INTO public.orders (id,table_account_id,status) VALUES (1,2,1);
INSERT INTO public.orders (id,table_account_id,status) VALUES (2,1,1);

INSERT INTO public.order_items VALUES (1,1,1,'Sprite');
INSERT INTO public.order_items VALUES (2,1,1,'Barq\'s');
INSERT INTO public.order_items VALUES (3,3,1,'Extra Onions');
INSERT INTO public.order_items VALUES (4,2,2,'Guinness');
INSERT INTO public.order_items VALUES (5,4,2,'Double Cheese');


