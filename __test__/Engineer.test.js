const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

test('creates new Engineer', () => {
    const employee = new Engineer('John', 1, 'john@email.com', 'John92');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('john@email.com');
    expect(employee.github).toBe('John92');

    expect(employee.getGithub()).toBe("https://github.com/John92");
    expect(employee.getRole()).toBe('Engineer');
});