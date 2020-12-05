import { basename } from 'path';
import Fuse from 'fuse.js'
import readdirp from 'readdirp'

export class Base {
    protected static async find<T>(query: string, keys: string[], prop?: string): Promise<T[]> | null {
        const results: T[] = []

        const fuse = new Fuse(await this.list<T>(), {
            threshold: 0.4,
            keys
        })

        for (const { item } of fuse.search(query)) {
            if (!prop) {
                results.push(item)
            } else {
                results.push(item[prop])
            }
        }

        if (!results.length) {
            return null
        }

        return results
    }

    private static async list<T>(): Promise<T[]> {
        const list: T[] = []
        const dir = readdirp(`${__dirname}/../data`)

        for await (const file of dir) {
            list.push((await import(file.fullPath))[basename(file.path, '.js')])
        }

        return list
    } 
}