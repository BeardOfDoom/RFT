﻿INSERT INTO STATIONS (NAME, PLATFORMS)
VALUES ('Kisvárda', 2);
INSERT INTO STATIONS (NAME, PLATFORMS)
VALUES ('Ajak', 2);
INSERT INTO STATIONS (NAME, PLATFORMS)
VALUES ('Kisvárda-Hármasút', 2);

INSERT INTO NEIGHBOURS (NEIGHBOUR_ID, DISTANCE, STATIONS_ID)
VALUES (2, 3, 1);
INSERT INTO NEIGHBOURS (NEIGHBOUR_ID, DISTANCE, STATIONS_ID)
VALUES (1, 3, 2);
INSERT INTO NEIGHBOURS (NEIGHBOUR_ID, DISTANCE, STATIONS_ID)
VALUES (3, 2, 1);
INSERT INTO NEIGHBOURS (NEIGHBOUR_ID, DISTANCE, STATIONS_ID)
VALUES (1, 2, 3);

INSERT INTO ROUTES
VALUES (NULL);
INSERT INTO ROUTES
VALUES (NULL);

INSERT INTO ROUTE_STATIONS_CONNECTION (PLATFORM, EXPLETIVE_TICKET, ROUTES_ID, STATIONS_ID)
VALUES (1, 0, 1, 2);
INSERT INTO ROUTE_STATIONS_CONNECTION (PLATFORM, EXPLETIVE_TICKET, ROUTES_ID, STATIONS_ID)
VALUES (1, 0, 1, 1);
INSERT INTO ROUTE_STATIONS_CONNECTION (PLATFORM, EXPLETIVE_TICKET, ROUTES_ID, STATIONS_ID)
VALUES (1, 0, 1, 3);
INSERT INTO ROUTE_STATIONS_CONNECTION (PLATFORM, EXPLETIVE_TICKET, ROUTES_ID, STATIONS_ID)
VALUES (2, 0, 2, 1);
INSERT INTO ROUTE_STATIONS_CONNECTION (PLATFORM, EXPLETIVE_TICKET, ROUTES_ID, STATIONS_ID)
VALUES (2, 0, 2, 2);

INSERT INTO TRAINS (TYPE, STATUS)
VALUES ('IC', 'OK');
INSERT INTO TRAINS (TYPE, STATUS)
VALUES ('SEBES', 'OK');

INSERT INTO WAGONS (ID, SEATS_NUMBER, CLASS, WIFI, STATUS, TRAINS_ID)
VALUES ('vagon1', 20, 1, 1, 'OK', 1);
INSERT INTO WAGONS (ID, SEATS_NUMBER, CLASS, WIFI, STATUS, TRAINS_ID)
VALUES ('vagon2', 20, 1, 1, 'OK', 1);
INSERT INTO WAGONS (ID, SEATS_NUMBER, CLASS, WIFI, STATUS, TRAINS_ID)
VALUES ('vagon3', 20, 1, 1, 'OK', 1);
INSERT INTO WAGONS (ID, SEATS_NUMBER, CLASS, WIFI, STATUS, TRAINS_ID)
VALUES ('vagon4', 20, 2, 0, 'OK', 2);
INSERT INTO WAGONS (ID, SEATS_NUMBER, CLASS, WIFI, STATUS, TRAINS_ID)
VALUES ('vagon5', 20, 2, 0, 'OK', 2);

INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 1);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 2);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 3);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 4);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 5);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 6);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 7);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 8);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 9);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 10);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 11);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 12);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 13);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 14);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 15);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 16);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 17);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 18);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 19);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 20);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 1);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 2);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 3);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 4);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 5);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 6);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 7);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 8);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 9);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 10);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 11);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 12);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 13);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 14);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 15);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 16);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 17);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 18);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 19);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 20);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 1);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 2);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 3);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 4);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 5);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 6);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 7);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 8);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 9);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 10);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 11);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 12);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 13);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 14);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 15);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 16);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 17);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 18);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 19);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 20);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 1);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 2);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 3);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 4);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 5);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 6);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 7);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 8);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 9);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 10);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 11);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 12);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 13);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 14);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 15);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 16);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 17);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 18);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 19);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 20);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 1);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 2);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 3);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 4);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 5);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 6);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 7);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 8);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 9);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 10);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 11);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 12);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 13);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 14);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 15);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 16);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 17);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 18);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 19);
INSERT INTO SEATS (RESERVED, NUMBER)
VALUES (0, 20);

INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (1, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (2, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (3, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (4, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (5, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (6, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (7, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (8, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (9, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (10, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (11, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (12, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (13, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (14, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (15, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (16, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (17, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (18, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (19, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (20, 'vagon1');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (21, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (22, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (23, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (24, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (25, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (26, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (27, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (28, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (29, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (30, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (31, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (32, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (33, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (34, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (35, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (36, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (37, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (38, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (39, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (40, 'vagon2');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (41, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (42, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (43, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (44, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (45, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (46, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (47, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (48, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (49, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (50, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (51, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (52, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (53, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (54, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (55, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (56, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (57, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (58, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (59, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (60, 'vagon3');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (61, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (62, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (63, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (64, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (65, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (66, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (67, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (68, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (69, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (70, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (71, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (72, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (73, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (74, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (75, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (76, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (77, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (78, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (79, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (80, 'vagon4');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (81, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (82, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (83, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (84, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (85, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (86, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (87, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (88, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (89, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (90, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (91, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (92, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (93, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (94, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (95, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (96, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (97, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (98, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (99, 'vagon5');
INSERT INTO WAGON_SEAT_CONNECTION (SEATS_ID, WAGONS_ID)
VALUES (100, 'vagon5');

INSERT INTO TRAIN_ROUTE_CONNECTION (START, TRAINS_ID, ROUTES_ID)
VALUES ('20161127 10:34:09 AM', 1, 1);
INSERT INTO TRAIN_ROUTE_CONNECTION (START, TRAINS_ID, ROUTES_ID)
VALUES ('20161127 11:34:09 AM', 2, 2);

INSERT INTO TICKETS (PRICE, TYPE, DISTANCE)
VALUES (150, 'Pótjegy', 5);
INSERT INTO TICKETS (PRICE, TYPE, DISTANCE)
VALUES (200, 'Pótjegy', 10);
INSERT INTO TICKETS (PRICE, TYPE, DISTANCE)
VALUES (300, 'Teljes árú jegy', 5);
INSERT INTO TICKETS (PRICE, TYPE, DISTANCE)
VALUES (400, 'Teljes árú jegy', 10);