import assert from 'assert'
import { AFK } from '../src/structures/index'
import { Athalia } from '../src/data/Celestials/Athalia'

describe('AFK', () => {
    describe('#Hero', () => {
        describe('#get()', () => {
            it('should return a single Hero object equal to Athalia', async () => {
                const [hero] = await AFK.Hero.get('athalia')

                assert.strictEqual(hero, Athalia)
            })
        })
    })

    describe('#SignatureItem', () => {
        describe('#get()', () => {
            it('should return a single Signature Item equal to "The Sin Purgers"', async () => {
                const [signature] = await AFK.SignatureItem.get('purgers')

                assert.strictEqual(signature, Athalia.signature)
            })
        })
    })

    describe('#Furniture', () => {
        describe ('#get()', () => {
            it('should return a single Furniture object equal to "Power of Light"', async () => {
                const [furniture] = await AFK.Furniture.get('power light')

                assert.strictEqual(furniture, Athalia.furniture)
            })
        })
    })
})
