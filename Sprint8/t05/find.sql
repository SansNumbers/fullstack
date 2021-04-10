SELECT id, name, description, race, class_role FROM (
    SELECT * FROM (
        SELECT * FROM (
            SELECT * FROM heroes
            WHERE heroes.race <> 'human'
        ) sql3
        ORDER BY id ASC LIMIT 1
    ) sql2
    WHERE class_role = 'tankman' or class_role = 'healer'
) sql1
WHERE name LIKE BINARY '%a%'
