// tslint:disable:no-magic-numbers
import { reverse } from 'src/main/js/g0001_0100/s0007_reverse_integer/solution'
import { expect, test } from 'vitest'

test('reverse', () => {
    expect(reverse(123)).toEqual(321)
})

test('reverse2', () => {
    expect(reverse(-123)).toEqual(-321)
})

test('reverse3', () => {
    expect(reverse(120)).toEqual(21)
})

test('reverse4', () => {
    expect(reverse(1534236469)).toEqual(0)
})

test('reverse5', () => {
    expect(reverse(-2147483648)).toEqual(0)
})
