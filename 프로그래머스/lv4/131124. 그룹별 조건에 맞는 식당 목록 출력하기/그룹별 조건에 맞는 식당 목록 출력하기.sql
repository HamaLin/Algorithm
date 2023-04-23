-- 코드를 입력하세요
SELECT M.MEMBER_NAME, R.REVIEW_TEXT, DATE_FORMAT(R.REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE
    FROM MEMBER_PROFILE AS M
    RIGHT OUTER JOIN REST_REVIEW AS R
    ON M.MEMBER_ID = R.MEMBER_ID
    WHERE 
        M.MEMBER_NAME IS NOT NULL
            AND
        R.MEMBER_ID IN 
            (
                SELECT MEMBER_ID 
                    FROM REST_REVIEW 
                    GROUP BY MEMBER_ID 
                    HAVING COUNT(*) = 
                            (
                                SELECT MAX(COUNED) 
                                FROM (
                                        SELECT COUNT(*) AS COUNED 
                                        FROM REST_REVIEW 
                                        GROUP BY MEMBER_ID) AS RESULT
                                     )
                            )
    ORDER BY REVIEW_DATE ASC, R.REVIEW_TEXT ASC
    ;