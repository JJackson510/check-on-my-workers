const inquirer = require('inquirer');
const prompt = require('inquirer');
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
            'Add a department',
            'Add a role',
            'Add an employee',
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
                addDepartment();
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

const addDepartment = () => {
    inquirer
    .prompt([
        {
            name:'department',
            type:'input',
            message:'What is the name of the department?'
        }
    ])  .then((data) => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        db.query(sql, (data.department), (err, res) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            console.table(res);
            console.log(`
**** Department  was successfully added! ****
    `)
        });
        choices();
    })
};

const addRoles = () => {
    inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What role are you adding?'
        },
        {
            name:'pay',
            type:'input',
            message: 'What is the salary of this position?'
        },
        {
            name:'id',
            type:'input',
            message:'What is the id of this role?'
        },
    ]).then((data) => {
        const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
        db.query(sql,(data.name, data.pay, data.id), (err, res) => {
            if(err){
                res.status(400).json({ error: err.message });
                return;
            }
            console.log(`
**** Department  was successfully added! ****
    `)
    choices();
        });
    })
};

const addEmployee = () => {
    inquirer
    .prompt([
        {
            name:'first',
            type:'input',
            message:'What is the first name of the employee?'
        },
        {
            name:'last',
            type:'input',
            message:'What is the last name of the employee?'
        },
        {
            name:'role',
            type: 'choices',
            message:'What is their role?',
            choices: ['manager', 'sales', 'A&R', 'street_team']
        }
    ]).then((data) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
        const params= [data.first_name, data.last_name, data.role_id, data.manager_id];
        db.query(sql, params, (err, res) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            console.table(res);
            console.log(`
**** Department  was successfully added! ****
    `)
        });
    })
    choices();
};




choices();
