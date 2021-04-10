USE ucode_web;
select name, sum_power AS power FROM 
(
    SELECT heroes.name AS name, sum(powers.points) AS sum_power 
    FROM heroes JOIN powers ON powers.hero_id = heroes.id 
    GROUP BY heroes.id
) needed
ORDER BY sum_power DESC LIMIT 1;


SELECT name, sum_power AS power FROM ( 
    SELECT heroes.name AS name, sum(table1.points) AS sum_power 
    FROM heroes JOIN ( 
        SELECT hero_id, points FROM powers WHERE type = 'defense'
    ) 
    table1 ON table1.hero_id = heroes.id 
    GROUP BY heroes.id
) needed
ORDER BY power ASC LIMIT 1;


SELECT name, sum_power AS power FROM ( 
    SELECT heroes.name AS name, sum(powers.points) AS sum_power 
    FROM heroes JOIN ( 
        SELECT hero_id FROM teams WHERE name = 'Avengers' 
    ) 
    table1 ON table1.hero_id = heroes.id JOIN powers ON powers.hero_id = heroes.id 
    GROUP BY heroes.id 
) needed
ORDER BY power DESC;


SELECT name, sum_power AS power FROM 
(
    SELECT teams.name AS name, sum(powers.points) AS sum_power 
    FROM teams JOIN powers ON powers.hero_id = teams.hero_id 
    GROUP BY name
) needed
ORDER BY power ASC;