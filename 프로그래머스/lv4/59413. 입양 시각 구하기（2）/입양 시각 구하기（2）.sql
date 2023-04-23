WITH RECURSIVE cte AS (
    SELECT 0 AS HOUR
    UNION ALL
    SELECT HOUR + 1 FROM cte
    WHERE HOUR < 23
)

SELECT 
        HOUR,
        IF((
            SELECT COUNT(*)
            FROM ANIMAL_OUTS 
            WHERE HOUR(DATETIME) = HOUR
            GROUP BY HOUR(DATETIME)
        )> 0, (
            SELECT COUNT(*)
            FROM ANIMAL_OUTS 
            WHERE HOUR(DATETIME) = HOUR
            GROUP BY HOUR(DATETIME)
        ), 0) AS 'COUNT'
    FROM cte
    ;