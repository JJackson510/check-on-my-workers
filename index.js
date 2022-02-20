const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

function choices(){
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do today?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add  a department',
            'Add  a role',
            'Add  an employee',
            'Update employee roles',
            'Exit'
        ]
    }).then(function(answer){
        switch(answer.action){
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartments();
                break;
            case 'Add a role':
                addRoles();
                break;
            case 'Add an employee':
                addEmployee();
            case 'Update employee roles':
                updateRole();
                break;
            case 'Exit':
                exit();
                default:
                    break;
        }
    })
};

const viewDepartments = () => {
    const sql = `select * from department order by name asc`;
    db.query(sql, (err, res) => {
        if (err) throw err;
            console.table(res)
        choices();
    });
};

const viewRoles = () => {
    const sql = `select * from role `;
    db.query(sql, (err, res) => {
        if(err) throw err;
        console.table(res)
        choices();
    });
};

const viewEmployees = () => {
    const sql = `select * from employee`;
    db.query(sql, (err, res) => {
        if(err) throw err;
        console.table(res)
        choices();
    });
};

const addDepartments = () => {
        inquirer
        .prompt([
            {
                name:'department',
                type:'input',
                message:'What is the name of the department?'
            }
        ])  .then((data) => {
            const sql = `INSERT INTO department (name) VALUES (?)`;
            db.query(sql, (data.name), (err, res) => {
                if (err) {
                    res.status(400).json({ error: err.message });
                    return;
                }
                console.log(`
**** Department ${data.name} was successfully added! ****
        `)
            });
            choices();
        })
};



choices();
