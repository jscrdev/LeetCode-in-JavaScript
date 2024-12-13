// tslint:disable:no-magic-numbers
import { describe, it, expect } from 'vitest'
import { ListNode } from 'src/main/js/com_github_leetcode/listnode'
import { constructLinkedList, createSinglyLinkedList } from 'src/test/js/com_github_leetcode/linkedlistutils'

describe('ListNode', () => {
    it('should initialize with default values', () => {
        const node = new ListNode()
        expect(node.val).toBe(0)
        expect(node.next).toBeNull()
    })

    it('should initialize with given values', () => {
        const nextNode = new ListNode(2)
        const node = new ListNode(1, nextNode)
        expect(node.val).toBe(1)
        expect(node.next).toBe(nextNode)
    })

    it('toString should return a comma-separated list of values', () => {
        const node3 = new ListNode(3)
        const node2 = new ListNode(2, node3)
        const node1 = new ListNode(1, node2)
        expect(node1.toString()).toBe('1, 2, 3')
    })
})

describe('constructLinkedList', () => {
    it('should return null for an empty array', () => {
        expect(constructLinkedList([])).toBeNull()
    })

    it('should create a linked list from an array', () => {
        const nums = [1, 2, 3]
        const list = constructLinkedList(nums)
        expect(list.val).toBe(1)
        expect(list.next.val).toBe(2)
        expect(list.next.next.val).toBe(3)
        expect(list.next.next.next).toBeNull()
    })
})

describe('createSinglyLinkedList', () => {
    it('should throw an error for an empty array', () => {
        expect(() => createSinglyLinkedList([])).toThrow(
            'Please pass in a valid listValues to create a singly linked list.',
        )
    })

    it('should create a singly linked list from an array', () => {
        const listValues = [1, 2, 3]
        const list = createSinglyLinkedList(listValues)
        expect(list.val).toBe(1)
        expect(list.next.val).toBe(2)
        expect(list.next.next.val).toBe(3)
        expect(list.next.next.next).toBeNull()
    })
})
