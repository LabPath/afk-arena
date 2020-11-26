export interface Hero {
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

export interface SignatureItem {
    name: string
    description: string
    skill: string
    unlock: string
    unlock1: string
    unlock2: string
    unlock3: string
}

export interface Furniture {
    ability: string
    unlock1: string
    unlock2: string
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

export type Class = 'Mage' | 'Ranger' | 'Support' | 'Tank' | 'Warrior'

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

export type Trait =
    | "Dura's Sorcery"
    | "Dura's Celerity"
    | "Dura's Sustenance"
    | "Dura's Fortitude"
    | "Dura's Might"