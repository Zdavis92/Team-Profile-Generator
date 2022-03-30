const Intern = require('../lib/Intern');

test('creates new Intern', () => {
    const employee = new Intern('John', 1, 'john@email.com', 'UT Austin');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('john@email.com');
    expect(employee.school).toBe('UT Austin');

    expect(employee.getSchool()).toBe("UT Austin");
    expect(employee.getRole()).toBe('Intern');
});