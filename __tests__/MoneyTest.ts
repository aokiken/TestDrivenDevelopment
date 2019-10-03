import { Dollar } from "../src/Dollar"

test('Multiplication', () => {
    const five = new Dollar(5)
    let product = five.times(2)
    expect(10).toEqual(product.amount)
    product = five.times(3)
    expect(15).toEqual(product.amount)
})
