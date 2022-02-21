INSERT INTO department(name)
        VALUES
        ('marketing'),
        ('producer'),
        ('engineer'),
        ('dj'),
        ('street_team'),
        ('sound'),
        ('video');


INSERT INTO role(title,salary,department_id)
values
('manager', 100.00, 1),
('sales', 200.00, 1),
('clear', 300.00, 1),
('A&R', 1500.00, 1),
("CEO", 400.00, 1);
('street_team', 150.00, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
        values 
        ('Stefaney', 'Jackson', 1, null),
        ('Ashley', 'Ellis',2, 1),
        ('Cameon', 'Johnson',3, 1),
        ('John', 'Jones', 4, 1),
        ('Ronald', 'Firbank',5, 1);
    -- ('Virginia', 'Woolf',"sound",null ),
    -- ('Piers', 'Gaveston',"sound",null),
    -- ('Charles', 'LeRoi',"street_team",null ),
    -- ('Katherine', 'Mansfield', "street_team",null),
    -- ('Dora', 'Carrington', "street_team",null),
    -- ('Edward', 'Bellamy', "street_team",null),
    -- ('Montague', 'Summers', "video", null),
    -- ('Octavia', 'Butler',"video", null ),
    -- ('Unica', 'Zurn', "video", null),
    -- ('James', 'Fraser',"video", null ),
    -- ('Jack', 'London', "marketing", null),
    -- ('Robert', 'Bruce', "marketing", null),
    -- ('Peter', 'Greenaway',"marketing", null),
    -- ('Derek', 'Jarman', "marketing", null),
    -- ('Paolo', 'Pasolini', "marketing", null),

    
