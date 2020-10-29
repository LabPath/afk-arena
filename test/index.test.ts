import assert from 'assert'
import AFK from '../src/index'
import { Athalia } from '../src/data/Celestials/Athalia'

const hero = new AFK('athalia');

describe('AFK', () => {
    describe('#info()', () => {
        it('should return a single Hero object equal to Athalia', async () => {
            assert.strictEqual(await hero.info(), Athalia)
        })
    })

    describe('#signature()', () => {
        it('should return a single Signature Item equal to "The Sin Purgers"', async () => {
            assert.strictEqual(await hero.signature(), Athalia.signature)
        })
    })

    describe('#furniture()', () => {
        it('should return a single Furniture object equal to "Power of Light"', async () => {
            assert.strictEqual(await hero.furniture(), Athalia.furniture)
        })
    })
})