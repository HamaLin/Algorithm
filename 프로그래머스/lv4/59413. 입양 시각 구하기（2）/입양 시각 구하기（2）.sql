WITH RECURSIVE cte AS (
    SELECT 0 AS HOUR
    UNION ALL
    SELECT HOUR + 1 FROM cte
    WHERE HOUR < 23
)

SELECT 
        HOUR,
        (
            SELECT COUNT(*)
            FROM ANIMAL_OUTS 
            GROUP BY HOUR(ANIMAL_OUTS.DATETIME)
            HAVING HOUR(ANIMAL_OUTS.DATETIME) = HOUR
        ) AS 'COUNT'
    FROM cte
    ;
