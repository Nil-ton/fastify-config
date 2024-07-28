import { describe } from 'node:test'
import assert from 'node:assert'

function sum(a:number, b:number) {
    return a + b
}

describe('Running test', () => {
    const actual  = sum(1,2)
    const expected = 3
    assert.strictEqual(actual, expected)
})