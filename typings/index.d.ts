declare module 'afk-arena' {
    export class Base {
        protected static find<T>(query: string, keys: string[], prop?: string): Promise<T[]> | null
        private static list<T>(): Promise<T[]>
    }

    export namespace AFK {
        
        export class Furniture extends Base {
            public readonly ability: string
            public readonly unlock1: string
            public readonly unlock2: string

            public static get(furniture: string): Promise<Furniture[]>
        }

        export class Hero extends Base {
            public readonly name: string
            public readonly aliases?: string[]
            public readonly title: string
            public readonly skins: string[]
            public readonly union: string | null
            public readonly faction: Faction | null
            public readonly advantage: Faction | null
            public readonly role: PrimaryRole
            public readonly type: HeroType
            public readonly class: HeroClass
            public readonly trait: HeroTrait
            public readonly armor: ArmorType
            public readonly signature: SignatureItem
            public readonly furniture: Furniture

            public static get(hero: string): Promise<Hero[]>
        }

        export class SignatureItem extends Base {
            public readonly name: string
            public readonly description: string
            public readonly skill: string
            public readonly unlock: string
            public readonly unlock1: string
            public readonly unlock2: string
            public readonly unlock3: string

            public static get(signature: string): Promise<SignatureItem[]>
        }
    }

    export type ArmorType = 'Padded' | 'Plate' | 'Leather'

    export type Faction =
        | 'Celestial'
        | 'Dimensional'
        | 'Graveborn'
        | 'Hypogean'
        | 'Lightbearer'
        | 'Mauler'
        | 'Wilder'

    export type HeroClass = 'Mage' | 'Ranger' | 'Support' | 'Tank' | 'Warrior'

    export type HeroTrait =
        | "Dura's Sorcery"
        | "Dura's Celerity"
        | "Dura's Sustenance"
        | "Dura's Fortitude"
        | "Dura's Might"

    export type HeroType = 'Agility' | 'Intelligence' | 'Strength'

    export type PrimaryRole =
        | 'Area of Effect'
        | 'Assassin'
        | 'Buffer'
        | 'Burst Damage'
        | 'Continuous Damage'
        | 'Control'
        | 'Debuffer'
        | 'Regen'
        | 'Tank'
}