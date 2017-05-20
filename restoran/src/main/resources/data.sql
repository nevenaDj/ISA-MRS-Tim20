INSERT INTO usert (email, password, type) VALUES ('admin@admin.com','admin',0);
INSERT INTO usert (email, password, type) VALUES ('nena@gmail.com','nenasw',2);
INSERT INTO usert (email, password, type) VALUES ('nevena5695@gmail.com','123456',2);
INSERT INTO usert (email, password, type) VALUES ('mika@gmail.com','123456',2);
INSERT INTO usert (email, password, type) VALUES ('zika@gmail.com','123456',2);
INSERT INTO usert (email, password, type) VALUES ('nomisabi@gmail.com','nomisabi',2);
INSERT INTO usert (email, password, type) VALUES ('a@a.a','a',1);
INSERT INTO usert (email, password, type) VALUES ('b@b.b','b',4);

INSERT INTO guest (email, password, first_name,last_name) VALUES ('nena@gmail.com','nenasw','Nena','Djeric');
INSERT INTO guest (email, password, first_name,last_name) VALUES ('nomisabi@gmail.com','nomisabi','Noemi','Sabados');
INSERT INTO guest (email, password, first_name,last_name) VALUES ('nevena5695@gmail.com','123456','Pera','Petrovic');
INSERT INTO guest (email, password, first_name,last_name) VALUES ('mika@gmail.com','123456','Mika','Mikic');
INSERT INTO guest (email, password, first_name,last_name) VALUES ('zika@gmail.com','123456','Zika','Petrovic');
INSERT INTO friendship (id_friend, guest_id, request_accepted) VALUES (1,2, TRUE);
INSERT INTO friendship (id_friend, guest_id, request_accepted) VALUES (1,3, FALSE);

INSERT INTO supplier (email, password, name, active) VALUES ('b@b.b','b','b',true);

INSERT INTO sysman (email, password) VALUES ('admin@admin.com','admin') ;
INSERT INTO manager (email, password, first_name, last_name, active) VALUES ('a@a.a','a','a','a',true) ;

INSERT INTO food (name, description) VALUES ('Chicken', 'Chicken');
INSERT INTO food (name, description) VALUES ('Beef', 'Beef');
INSERT INTO drink (name, description) VALUES ('Sprite', 'Sprite');
INSERT INTO drink (name, description) VALUES ('Coca-Cola', 'Coca-Cola');
INSERT INTO drink_menu_item (drink_id, price) VALUES (1, 150);
INSERT INTO drink_menu_item (drink_id, price) VALUES (2, 150);

INSERT INTO menu_item (food_id, price) VALUES (1, 750);
INSERT INTO menu_item (food_id, price) VALUES (2, 600);

INSERT INTO menu (date_update) VALUES ('2017-05-13 20:00');
INSERT INTO drink_menu (date_update) VALUES ('2017-05-13 20:00');

INSERT INTO menu_items (menu_id, items_id) VALUES (1,1);
INSERT INTO menu_items (menu_id, items_id) VALUES (1,2);

INSERT INTO drink_menu_items (drink_menu_id, items_id) VALUES (1,1);
INSERT INTO drink_menu_items (drink_menu_id, items_id) VALUES (1,2);

INSERT INTO restaurant (name,location, menu_id,drink_menu_id) values ('Nasa Prica','Blaa',1,1);
INSERT INTO restaurant (name, location,species) values ('Dva Stapica','Bla', 'Kineski');

INSERT INTO restaurant_manager (restaurant_id, manager_id) values (1,1);
INSERT INTO restaurant_suppliers (restaurant_id, suppliers_id) VALUES (1,1);

INSERT INTO region (name, restaurant_id) values ('basta',1);
INSERT INTO region (name, restaurant_id) values ('pusacki deo',1);
INSERT INTO region (name, restaurant_id) values ('nepusacki deo',1);
INSERT INTO region (name, restaurant_id) values ('terasa',1);

INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (1,2,1,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (2,2,1,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (3,2,1,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (6,2,1,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (7,2,1,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (8,2,1,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (9,2,1,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (4,4,2,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (5,4,3,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (10,2,3,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (11,2,3,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (12,2,4,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (13,2,4,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (14,2,4,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (15,2,4,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (16,2,4,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (17,2,4,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (18,2,4,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (19,2,2,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, region_id, restaurant_id) values (20,2,4,1);
INSERT INTO table_of_restaurant (number, number_of_chairs, restaurant_id) values (1,2,2);
INSERT INTO table_of_restaurant (number, number_of_chairs, restaurant_id) values (2,4,2);

