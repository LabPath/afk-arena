declare module 'afk-arena' {
    export class AFK {
        private options: SearchOptions
        private query: string
        public constructor(query: string, options?: SearchOptions)

        public info(): Promise<Hero | Hero[]>
        public signature(): Promise<SignatureItem | SignatureItem[]>
        public furniture(): Promise<Furniture | Furniture[]>
        
        private find<T>(): Promise<T | T[]>
        private list<T>(): Promise<T[]>
    }

    interface SearchOptions {
        strict: boolean
        faction: string
        threshold: number
    }

    interface Hero {
        name: string
        aliases?: string[]
        title: string
        skins: string[]
        union: string | null
        faction: Faction
        advantage: Faction | null
        role: PrimaryRole
        type: HeroType
        armor: ArmorType
        class: Class
        trait: Trait
        signature: SignatureItem
        furniture: Furniture
    }

    interface SignatureItem {
        name: string
        description: string
        skill: string
        unlock: string
        unlock1: string
        unlock2: string
        unlock3: string
    }

    interface Furniture {
        ability: string
        unlock1: string
        unlock2: string
    }

    type ArmorType = 'Padded' | 'Plate' | 'Leather'

    type Faction =
        | 'Celestial'
        | 'Dimensional'
        | 'Graveborn'
        | 'Hypogean'
        | 'Lightbearer'
        | 'Mauler'
        | 'Wilder'

    type Class = 'Mage' | 'Ranger' | 'Support' | 'Tank' | 'Warrior'

    type HeroType = 'Agility' | 'Intelligence' | 'Strength'

    type PrimaryRole =
        | 'Area of Effect'
        | 'Assassin'
        | 'Buffer'
        | 'Burst Damage'
        | 'Continuous Damage'
        | 'Control'
        | 'Debuffer'
        | 'Regen'
        | 'Tank'

    type Trait =
        | "Dura's Sorcery"
        | "Dura's Celerity"
        | "Dura's Sustenance"
        | "Dura's Fortitude"
        | "Dura's Might"
}