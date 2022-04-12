const Manager = require("../lib/Manager");
const fs = require('fs');
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function writeFile(fileContent) {
    fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('File created!');
        }
    })
}

function createCard(employee) {
        if (employee instanceof Manager) {
            const { name, id, email, officeNumber } = employee
            return `
            <div class="card">
            <div class="card-head">
                <h3>${name}</h3>
                <h4>Manager</h4>
            </div>
            <div>
                <ul>
                    <li>${id}</li>
                    <li>${email}</li>
                    <li>${officeNumber}</li>
                </ul>
            </div>
            </div>`
        }
        else if (employee instanceof Engineer) {
            const { name, id, email, github } = employee
            return `
            <div class="card">
            <div class="card-head">
                <h3>${name}</h3>
                <h4>Engineer</h4>
            </div>
            <div>
                <ul>
                    <li>${id}</li>
                    <li>${email}</li>
                    <li>${github}</li>
                </ul>
            </div>
            </div>`
        }
        else {
            const { name, id, email, school } = employee
            return `
            <div class="card">
            <div class="card-head">
                <h3>${name}</h3>
                <h4>Intern</h4>
            </div>
            <div>
                <ul>
                    <li>${id}</li>
                    <li>${email}</li>
                    <li>${school}</li>
                </ul>
            </div>
            </div>`
        }
}

const generatePage = (employees) => {
    const fileContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div>
            ${employees.map(employee => {
                return createCard(employee)
            })}
        </div>
    </body>
    </html>`

    writeFile(fileContent);
}

module.exports = { generatePage }