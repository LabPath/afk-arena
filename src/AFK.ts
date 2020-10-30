import { Furniture, Hero, SignatureItem } from './interfaces'
import { basename } from 'path';
import Fuse from 'fuse.js'
import readdirp from 'readdirp'

interface SearchOptions {
    strict: boolean
    faction: string
    threshold: number
}

export class AFK {
    private options: SearchOptions
    private query: string

    public constructor(query: string, options?: SearchOptions) {
        this.query = query
        this.options = options
    }

    public async info() {
        return await this.find<Hero>(['name', 'aliases', 'title'])
    }

    public async signature() {
        return await this.find<SignatureItem>([
            'name', 'signature.item', 'signature.skill'
        ], 'signature')
    }

    public async furniture() {
        return await this.find<Furniture>(['name', 'furniture.ability'], 'furniture')
    }

    private async find<T>(keys: string[], prop?: string): Promise<T | T[]> {
        const results: T[] = []

        const fuse = new Fuse(await this.list<T>(), {
            threshold: this.options?.threshold ?? 0.3,
            keys
        })
        
        for (const { item } of fuse.search(this.query)) {
            if (!prop) {
                results.push(item)
            } else {
                results.push(item[prop])
            }
        }

        if (!results.length) {
            return null
        }

        if (this.options?.strict || results.length === 1) {
            return results[0]
        }

        return results
    }

    private async list<T>(): Promise<T[]> {
        const populated: T[] = []
        const dir = readdirp(`${__dirname}/./data`)

        for await (const file of dir) {
            const item = await import(file.fullPath)
            populated.push(item[basename(file.path, '.js')])
        }

        return populated
    }
}