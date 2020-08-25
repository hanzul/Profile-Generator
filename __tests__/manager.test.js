const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Hani','1','Hani.ghaderi1@gmail.com','1')
    expect(manager.name).toBe('Hani')
    expect(manager.role).toBe('Manager')
    expect(manager.employeeID).toBe('1')
    expect(manager.email).toBe('Hani.ghaderi1@gmail.com')
    expect(manager.officeNumber).toBe('1')
})

test('produces HTML data using the startCard method', () => {
    const manager = new Manager('Hani','1','Hani.ghaderi1@gmail.com','2')
    const card = manager.makeCard()
    expect(card).toContain(manager.name)
    expect(card).toContain(manager.role)
    expect(card).toContain(manager.employeeID)
    expect(card).toContain(manager.email)
    expect(card).toContain(manager.officeNumber)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})