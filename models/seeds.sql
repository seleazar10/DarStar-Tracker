USE darstardb;

CREATE TABLE Classrooms(
    id int NOT NULL
    AUTO_INCREMENT,
	studentid INTEGER NOT NULL,
    name varchar(100) NULL,
    pillar1 INTEGER NULL,
    pillar2 INTEGER NULL,
    pillar3 INTEGER NULL,
    pillar4 INTEGER NULL,
    color VARCHAR(100) NULL,
    missingwork VARCHAR(100) NULL,
    -- date DATETIME NULL,
    descriptioncomments VARCHAR(255) NULL,
    -- createdAt DATETIME NULL,
    -- updatedAt DATETIME NULL,
	PRIMARY KEY(id)
)


-- Create TABLE adminInfo(
--     id int NOT NULL AUTO_INCREMENT,
--     anncmtDate varchar(45),
--     schoolAnnouncemnt varchar(1000) NOT NULL,
--     PRIMARY KEY(id)
-- )
