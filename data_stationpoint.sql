INSERT INTO public.data_stationpoint(
            id, geo, station_name)
    VALUES (1, (ST_SetSRID(ST_MakePoint(1084489.76, 1108525.21), 3116)), 'station_1');

INSERT INTO public.data_stationpoint(
            id, geo, station_name)
    VALUES (2, (ST_SetSRID(ST_MakePoint(1084324.37, 1108747.85), 3116)), 'station_2');

INSERT INTO public.data_stationpoint(
            id, geo, station_name)
    VALUES (3, (ST_SetSRID(ST_MakePoint(1084089.92, 1108823.47), 3116)), 'station_3');
