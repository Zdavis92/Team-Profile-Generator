const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('creates new Employee', () => {
    const employee = new Employee('John', 1, 'john@email.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('john@email.com')

    expect(employee.getName()).toBe('John');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('john@email.com')
    expect(employee.getRole()).toBe('Employee')
});