const Manager = require("../lib/Manager");
const fs = require('fs');

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

function createCards(employees) {
    employees.forEach(employee => {
        if (Manager) {
            return `
            <div class="card">
                <div class="card-head">
                    <h3>${employee.name}</h3>
                    <h4>Manager</h4>
                </div>
                <div>
                    <ul>
                        <li>${employee.id}</li>
                        <li>${employee.email}</li>
                        <li>${employee.officeNumber}</li>
                    </ul>
                </div>
            </div>`
        }
    })
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
            ${createCards(employees)}
        </div>
    </body>
    </html>`

    writeFile(fileContent);
}

module.exports = { generatePage }