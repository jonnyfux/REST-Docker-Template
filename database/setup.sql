USE restdockertemplate;
CREATE TABLE users
(
    usersId INT NOT NULL PRIMARY KEY, -- primary key column
    name VARCHAR(50) NOT NULL
);

-- Insert rows into table 'users'
INSERT INTO users
VALUES
( -- first row: values for the columns in the list above
 1, 'Donald'
),
( -- second row: values for the columns in the list above
 2, 'Trump'
)