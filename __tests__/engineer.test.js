
const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Hani','7','Hani@gmail.com','hanzul')

    expect(engineer.name).toBe('Hani')
    expect(engineer.role).toBe('Engineer')
    expect(engineer.employeeID).toBe('7')
    expect(engineer.email).toBe('Hani@gmail.com')
    expect(engineer.gitHub).toBe('hanzul')
})

test('produces HTML data using the startCard method', () => {
    const engineer = new Engineer('Hani','7','Hani@gmail.com','hanzul')
    const card = engineer.makeCard()
    expect(card).toContain(engineer.name)
    expect(card).toContain(engineer.role)
    expect(card).toContain(engineer.employeeID)
    expect(card).toContain(engineer.email)
    expect(card).toContain(engineer.gitHub)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})