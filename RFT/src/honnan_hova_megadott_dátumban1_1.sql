﻿-- Megfelelő időpontok kiszámitása
SELECT WAGONS.TRAINS_ID, SPEED, DISTANCE_BETWEEN_START_AND_STOP, CLASS1_SERVICES, CLASS2_SERVICES, EXTRA_PRICE, START + INTERVAL DISTANCE_BEFORE_START/SPEED*60.0 MINUTE AS 'START_TIME', START + INTERVAL (DISTANCE_BEFORE_START+DISTANCE_BETWEEN_START_AND_STOP)/SPEED*60.0 MINUTE AS 'ARRIVE_TIME'
FROM WAGONS
INNER JOIN 
-- A kiinduló állomás előtt megtett út, illetve a kiinduló és célállomás közti távolság kiszámitása
	(SELECT *, SUM(CASE WHEN STATION_INDEX_IN_ROUTE < START_INDEX_IN_ROUTE THEN DISTANCE ELSE 0 END) AS 'DISTANCE_BEFORE_START', SUM(CASE WHEN (STATION_INDEX_IN_ROUTE >= START_INDEX_IN_ROUTE AND STATION_INDEX_IN_ROUTE < STOP_INDEX_IN_ROUTE) THEN DISTANCE ELSE 0 END) AS 'DISTANCE_BETWEEN_START_AND_STOP'
	FROM
		(SELECT *
		FROM ROUTE_STATIONS_CONNECTION
		INNER JOIN 
		-- Azon vonatok kilistázása, amelyek ezen az útvonalon haladnak a kiválasztott napon.
			(SELECT TRAINS.ID, TRAINS.SPEED, TRAIN_ROUTE_CONNECTION.ROUTES_ID AS 'TMP4_ROUTES_ID', TRAIN_ROUTE_CONNECTION.START, TMP3.STATION_INDEX_IN_ROUTE AS 'START_INDEX_IN_ROUTE', TMP3.TMP2_STATION_INDEX_IN_ROUTE AS 'STOP_INDEX_IN_ROUTE', TMP3.STATIONS_ID AS 'START_STATIONS_ID', TMP3.TMP2_STATIONS_ID AS 'STOP_STATIONS_ID'
			FROM TRAINS
			INNER JOIN TRAIN_ROUTE_CONNECTION 
				ON TRAINS.ID = TRAIN_ROUTE_CONNECTION.TRAINS_ID
			INNER JOIN 
			-- Vizsgálat, szükséges-e pótjegy vásárlása a megteendő útvonalra.
				(SELECT ROUTE_STATIONS_CONNECTION.ROUTES_ID , SUM(ROUTE_STATIONS_CONNECTION.EXPLETIVE_TICKET) AS 'TMP3_EXPLETIVE_TICKET', ROUTE_STATIONS_CONNECTION.TYPE_OF_TRAINS_STOPS AS 'FROM_TYPE_OF_TRAINS_STOPS', TMP.TO_TYPE_OF_TRAINS_STOPS, TMP.STATIONS_ID, TMP.TMP2_STATIONS_ID, TMP.STATION_INDEX_IN_ROUTE, TMP.TMP2_STATION_INDEX_IN_ROUTE
					FROM ROUTE_STATIONS_CONNECTION
					INNER JOIN
					-- Azok az útvonalak, amelyek megállnak a célállomásnál és a kiinduló állomásnál is.
						(SELECT *
						FROM ROUTE_STATIONS_CONNECTION 
						INNER JOIN STATIONS ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID
						INNER JOIN 
						-- Azok az útvonalak, amelyek megállnak a célállomásnál, célállomásról infók.
							(SELECT STATIONS_ID AS 'TMP2_STATIONS_ID', STATION_INDEX_IN_ROUTE AS 'TMP2_STATION_INDEX_IN_ROUTE', ROUTES_ID AS 'TMP2_ROUTES_ID', TYPE_OF_TRAINS_STOPS AS 'TO_TYPE_OF_TRAINS_STOPS'
							FROM ROUTE_STATIONS_CONNECTION
							INNER JOIN STATIONS ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID
							WHERE STATIONS.NAME = 'Ajak') TMP2
							ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP2.TMP2_ROUTES_ID
						WHERE STATIONS.NAME = 'Kisvárda' AND TMP2.TMP2_STATION_INDEX_IN_ROUTE > ROUTE_STATIONS_CONNECTION.STATION_INDEX_IN_ROUTE) TMP 
						ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP.ROUTES_ID
					WHERE ROUTE_STATIONS_CONNECTION.STATION_INDEX_IN_ROUTE BETWEEN TMP.STATION_INDEX_IN_ROUTE AND TMP.TMP2_STATION_INDEX_IN_ROUTE
					GROUP BY ROUTE_STATIONS_CONNECTION.ROUTES_ID) TMP3
				ON TRAIN_ROUTE_CONNECTION.ROUTES_ID = TMP3.ROUTES_ID
			WHERE TMP3.TMP3_EXPLETIVE_TICKET = 0 AND TMP3.FROM_TYPE_OF_TRAINS_STOPS LIKE CONCAT('%',TRAINS.TYPE,'%') AND TMP3.TO_TYPE_OF_TRAINS_STOPS LIKE CONCAT('%',TRAINS.TYPE,'%')) TMP4
			ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP4.TMP4_ROUTES_ID) TMP8
		INNER JOIN 
			(SELECT ROUTES_ID AS 'TMP9_ROUTES_ID', STATION_INDEX_IN_ROUTE AS 'TMP9_STATION_INDEX_IN_ROUTE', STATIONS_ID AS 'TMP9_STATIONS_ID'
			FROM ROUTE_STATIONS_CONNECTION) TMP9
			ON TMP8.ROUTES_ID = TMP9.TMP9_ROUTES_ID AND TMP8.STATION_INDEX_IN_ROUTE+1 = TMP9.TMP9_STATION_INDEX_IN_ROUTE
		INNER JOIN
			(SELECT NEIGHBOUR_ID, DISTANCE, STATIONS_ID AS TMP10_STATIONS_ID
			FROM NEIGHBOURS) TMP10
			ON TMP10.NEIGHBOUR_ID = TMP9.TMP9_STATIONS_ID AND TMP10.TMP10_STATIONS_ID = TMP8.STATIONS_ID) TMP7
	ON TMP7.ID = WAGONS.TRAINS_ID
INNER JOIN (SELECT TRAINS_ID, GROUP_CONCAT(CASE WHEN CLASS = 1 THEN SERVICES END separator ';') AS 'CLASS1_SERVICES'
			FROM WAGONS
			GROUP BY WAGONS.TRAINS_ID) TMP5
			ON WAGONS.TRAINS_ID = TMP5.TRAINS_ID
INNER JOIN (SELECT TRAINS_ID, GROUP_CONCAT(CASE WHEN CLASS = 2 THEN SERVICES END separator ';') AS 'CLASS2_SERVICES'
			FROM WAGONS
			GROUP BY WAGONS.TRAINS_ID) TMP6
			ON WAGONS.TRAINS_ID = TMP6.TRAINS_ID
WHERE DATE(START + INTERVAL DISTANCE_BEFORE_START/SPEED*60.0 MINUTE) = DATE('2016-12-03') AND START + INTERVAL DISTANCE_BEFORE_START/SPEED*60.0 MINUTE > NOW()
-- EXAMPLE WHERE (CLASS1_SERVICES LIKE '%1%' OR CLASS2_SERVICES LIKE '%1%') AND (CLASS1_SERVICES LIKE '%4%' OR CLASS2_SERVICES LIKE '%4%')
GROUP BY WAGONS.TRAINS_ID;