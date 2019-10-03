import { Dollar } from "../src/Dollar"

test('Multiplication', () => {
    const five = new Dollar(5)
    expect(new Dollar(10)).toEqual(five.times(2))
    expect(new Dollar(15)).toEqual(five.times(3))
})

test('Equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
})
