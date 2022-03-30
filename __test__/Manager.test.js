const Manager = require('../lib/Manager');

test('creates new Manager', () => {
    const employee = new Manager('John', 1, 'john@email.com', 123);

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('john@email.com');
    expect(employee.officeNumber).toBe(123);

    expect(employee.getRole()).toBe('Manager')
});