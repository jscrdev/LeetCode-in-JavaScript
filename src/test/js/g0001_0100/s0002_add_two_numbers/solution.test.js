// tslint:disable:no-magic-numbers
import { ListNode } from 'src/main/js/com_github_leetcode/listnode'
import { addTwoNumbers } from 'src/main/js/g0001_0100/s0002_add_two_numbers/solution'
import { expect, test } from 'vitest'

test('addTwoNumbers', () => {
    expect(
        addTwoNumbers(
            new ListNode(2, new ListNode(4, new ListNode(3))),
            new ListNode(5, new ListNode(6, new ListNode(4))),
        ).toString(),
    ).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))).toString())
})

test('addTwoNumbers2', () => {
    const result = addTwoNumbers(new ListNode(0), new ListNode(0))
    expect(result.toString()).toEqual('0')
})

test('addTwoNumbers3', () => {
    expect(addTwoNumbers(new ListNode(5), new ListNode(5)).toString()).toEqual(
        new ListNode(0, new ListNode(1)).toString(),
    )
})
