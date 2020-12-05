import { Hero } from '../../structures/Hero'

export const Vurk: Hero = {
    name: 'Vurk',
    title: 'The Devious',
    skins: [],
    union: 'The Dragon Slayers',
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Area of Effect',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'Shadow Stinger',
        description: 'A crossbow, accurate and light. Perfect for a skulking kill or cunning ambush',
        skill: 'Madness',
        unlock: 'Vurk’s \'Mania\' ability now fires 3 crossbow bolts per aftack, however the additional bolts will deal 80% damage',
        unlock1: 'Additional crossbow bolt damage increased to 100% damage',
        unlock2: 'Additional crossbow bolt damage increased to 120% damage',
        unlock3: 'The \'Mania\' ability now fires 5 crossbow bolts per attack'
    },
    furniture: {
        ability: 'Poisonous Death',
        unlock1: 'Vurk\'s Normal Attacks and \'Mania\' ability deal 35% more damage to enemies that have been poisoned by his own abilities',
        unlock2: 'Prolongs the duration of time an enemy is poisoned for by 1 seconds when Vurk uses a Normal Attack or his \'Mania\' ability'
    }
}