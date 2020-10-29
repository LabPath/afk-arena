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

    export interface Hero {
        name: string
        aliases?: string[]
        title: string
        faction: Faction
        advantage: FactionAdvantage
        role: PrimaryRole
        type: NaturalStat
        class: NaturalClass
        receiving: Trait
        armor: ArmorMaterial
        signature: SignatureItem
        furniture: Furniture
    }

    export interface SignatureItem {
        item: string
        description: string
        skill: string
        default: string
        unlock1: string
        unlock2: string
        unlock3: string
    }

    export interface Furniture {
        ability: string
        unlock1: string
        unlock2: string
    }

    type ArmorMaterial = 'Padded' | 'Plate' | 'Leather'

    type Faction =
        | 'Celestial'
        | 'Dimensional'
        | 'Graveborn'
        | 'Hypogean'
        | 'Lightbearer'
        | 'Mauler'
        | 'Wilder'

    type FactionAdvantage = Omit<Faction, 'Dimensional'> | 'None'

    type NaturalClass = 'Mage' | 'Ranger' | 'Support' | 'Tank' | 'Warrior'

    type NaturalStat = 'Agility' | 'Intelligence' | 'Strength'

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