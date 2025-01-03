// tslint:disable:no-magic-numbers
import { exist } from 'src/main/js/g0001_0100/s0079_word_search/solution'
import { expect, test } from 'vitest'

const matrix = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
]

test('exist', () => {
    expect(exist(matrix, 'ABCCED')).toEqual(true)
})

test('exist2', () => {
    expect(exist(matrix, 'SEE')).toEqual(true)
})

test('exist3', () => {
    expect(exist(matrix, 'ABCB')).toEqual(false)
})
