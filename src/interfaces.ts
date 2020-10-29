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

export type ArmorMaterial = 'Padded' | 'Plate' | 'Leather'

export type Faction =
    | 'Celestial'
    | 'Dimensional'
    | 'Graveborn'
    | 'Hypogean'
    | 'Lightbearer'
    | 'Mauler'
    | 'Wilder'

export type FactionAdvantage = Omit<Faction, 'Dimensional'> | 'None'

export type NaturalClass = 'Mage' | 'Ranger' | 'Support' | 'Tank' | 'Warrior'

export type NaturalStat = 'Agility' | 'Intelligence' | 'Strength'

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